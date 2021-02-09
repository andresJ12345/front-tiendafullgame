import { Component, OnInit } from '@angular/core';

import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { JuegoService } from '../../services/juego.service';
import { ClienteService } from '../../services/cliente.service';
import { TecnologiaJuegoService } from '../../services/tecnologiaJuego.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create-alquiler',
  templateUrl: './create-alquiler.component.html',
  styleUrls: ['./create-alquiler.component.css'],
  providers: [AlquilerService, JuegoService, ClienteService, TecnologiaJuegoService]
})
export class CreateAlquilerComponent implements OnInit {

	public alquiler: Alquiler;
	public clientes;
	public juegos;
	public tecnologiaJuegos;
	public url;
	public status;
	public isEdit: boolean;
  private dia;
  private mes;
  private hoy;
  private fechaHoy;

  constructor(
  		private _alquilerService: AlquilerService,
  		private _juegoService: JuegoService,
  		private _clienteService: ClienteService,
  		private _tecnologiaJuegoService: TecnologiaJuegoService,
  	) {
      this.hoy = new Date();
      this.dia = this.hoy.getDate();
      this.mes = this.hoy.getMonth()+1;
      if(this.dia<10) {
          this.dia='0'+this.dia;
      } 

      if(this.mes<10) {
          this.mes='0'+this.mes;
      } 
      this.fechaHoy = this.hoy.getFullYear() + '-' + this.mes + '-' + this.dia;
  		this.alquiler = new Alquiler(null, -1, '#', -1, this.fechaHoy,'',null);
  		this.url = global.url;
  		this.isEdit = false;
  	 }

  ngOnInit(): void {
  	this.getJuegos();
  	this.getClientes();
  }

  calcularFechaHoy(){
    this.hoy = new Date();
      
  }

  onSubmit(form){
  	console.log(this.alquiler);
  	this._alquilerService.create(this.alquiler).subscribe(
    response => {
     	this.status = 'success';
       this.alquiler = response;
     	form.reset();
    },
    error => {
    	this.status = 'error';
      	console.log(<any>error);
    });
  }

  getJuegos(){
  	this._juegoService.getJuegos().subscribe(
        response => {
        	this.juegos = response;
        },
        error => {
          	console.log(<any>error);
        }
      );
  }

  getClientes(){
  	this._clienteService.getClientes().subscribe(
        response => {
        	this.clientes = response;
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  getTecnologiaJuegos(){
  	this._tecnologiaJuegoService.getTecnologiaJuegos().subscribe(
        response => {
        	this.tecnologiaJuegos = response;
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  clickPrecioAlquiler(){
  	this._alquilerService.getPrecioAlquiler(this.alquiler.ideJuego, 
                                              this.alquiler.fechaInicio, 
                                              this.alquiler.fechaFin).subscribe(
            response => {
              console.log(response)
              this.alquiler.precioAlquiler = response;
            },
            error => {
              console.log(<any>error);
              this.alquiler.precioAlquiler = null;
            }
         );
  }

  onChangeJuego(ideJuego){
  	this._tecnologiaJuegoService.getTecnologiaJuegoByJuego(ideJuego).subscribe(
        response => {
        	this.tecnologiaJuegos = response;
        },
        error => {
          console.log(<any>error);
          this.tecnologiaJuegos = null;
        }
      );
  }

}
