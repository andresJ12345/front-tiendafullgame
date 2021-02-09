import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Juego } from '../../models/juego';
import { JuegoService } from '../../services/juego.service';
import { ProtagonistaService } from '../../services/protagonista.service';
import { DirectorService } from '../../services/director.service';
import { MarcaService } from '../../services/marca.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-edit-game',
  templateUrl: '../create-game/create-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [JuegoService, ProtagonistaService, DirectorService, MarcaService]
})
export class EditGameComponent implements OnInit {

	public juego: Juego;
	public protagonistas;
	public directores;
	public marcas;
	public url;
	public status;
	public isEdit: boolean;

  constructor(
  		private _route: ActivatedRoute,
      	private _router: Router,
  		private _juegoService: JuegoService,
  		private _protagonistaService: ProtagonistaService,
  		private _directorService: DirectorService,
  		private _marcaService: MarcaService
  	) {
  		this.juego = new Juego(null,'','',0,-1,-1,-1,0);
  		this.url = global.url;
  		this.isEdit = true;
  	 }

  ngOnInit(): void {
  	this.getProtagonistas();
  	this.getDirectores();
  	this.getMarcas();
  	this.getJuego();
  }

  getJuego() {
  	// Sacar el parametro de URL
  	this._route.params.subscribe(params=>{

  		let id = +params['id'];
  		// Hacer una petición AJAX para conseguir los juegos
  		this._juegoService.getJuego(id).subscribe(
  				response => {
  					this.juego = response;
  					console.log(this.juego);
  				},
  				error => {
  					console.log(<any>error);
  					this._router.navigate(['home']);
  				}
  			);
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


  onSubmit(form){
  	console.log(this.juego);
  	this._juegoService.update(this.juego).subscribe(
    response => {
     	this.status = 'success';
    },
    error => {
    	this.status = 'error';
      	console.log(<any>error);
    });
  }

}
