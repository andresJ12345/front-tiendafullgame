import { Component, OnInit } from '@angular/core';

import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-alquiler',
  templateUrl: './list-alquiler.component.html',
  styleUrls: ['./list-alquiler.component.css'],
  providers:[AlquilerService]
})
export class ListAlquilerComponent implements OnInit {

	public alquileres: Array<Alquiler>;
	public url;
  private dia;
  private mes;
  private hoy;
  private fechaHoy;

  constructor(
  		private _alquilerService: AlquilerService
  	) { 
  		this.url = global;
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
      console.log(this.fechaHoy);
  }

  ngOnInit(): void {
  	this.getAlquileres();
  }

  getAlquileres(){
  	this._alquilerService.getAlquileres().subscribe(
  		response => {
  			this.alquileres = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  resetForm(){
    this.ngOnInit();
  }

  getVentaDia(){
    this._alquilerService.getVentaDia(this.fechaHoy).subscribe(
      response => {
        this.alquileres = response;
      },
      error => {
        console.log(<any>error);
        this.alquileres = null;
      }
    )
  }
}
