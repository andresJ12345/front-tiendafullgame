import { Component, OnInit } from '@angular/core';

import { Juego } from '../../models/juego';
import { JuegoService } from '../../services/juego.service';
import { ProtagonistaService } from '../../services/protagonista.service';
import { DirectorService } from '../../services/director.service';
import { MarcaService } from '../../services/marca.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
  providers: [JuegoService, ProtagonistaService, DirectorService, MarcaService]
})
export class CreateGameComponent implements OnInit {

	public juego: Juego;
	public protagonistas;
	public directores;
	public marcas;
	public url;
	public status;
	public isEdit: boolean;

  constructor(
  		private _juegoService: JuegoService,
  		private _protagonistaService: ProtagonistaService,
  		private _directorService: DirectorService,
  		private _marcaService: MarcaService
  	) {
  		this.juego = new Juego(null,'','',0,-1,-1,-1,0);
  		this.url = global.url;
  		this.isEdit = false;
  	 }

  ngOnInit(): void {
  	this.getProtagonistas();
  	this.getDirectores();
  	this.getMarcas();
  }

  onSubmit(form){
  	this._juegoService.create(this.juego).subscribe(
    response => {
     	this.status = 'success';
       this.juego = response;
     	form.reset();
    },
    error => {
    	this.status = 'error';
      	console.log(<any>error);
    });
  }

  getProtagonistas(){
  	this._protagonistaService.getProtagonistas().subscribe(
        response => {
        	this.protagonistas = response;
        },
        error => {
          	console.log(<any>error);
        }
      );
  }

  getDirectores(){
  	this._directorService.getDirectores().subscribe(
        response => {
        	this.directores = response;
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  getMarcas(){
  	this._marcaService.getMarcas().subscribe(
        response => {
        	this.marcas = response;
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
