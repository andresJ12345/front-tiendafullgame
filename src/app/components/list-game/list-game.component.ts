import { Component, OnInit } from '@angular/core';

import { Juego } from '../../models/juego';
import { Protagonista } from '../../models/protagonista';
import { Director } from '../../models/director';
import { Marca } from '../../models/marca';
import { JuegoService } from '../../services/juego.service';
import { ProtagonistaService } from '../../services/protagonista.service';
import { DirectorService } from '../../services/director.service';
import { MarcaService } from '../../services/marca.service';
import { AlquilerService } from '../../services/alquiler.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css'],
  providers:[JuegoService, ProtagonistaService, DirectorService, MarcaService, AlquilerService]
})
export class ListGameComponent implements OnInit {

	public juegos: Array<Juego>;
  public protagonistas: Array<Protagonista>;
  public protagonista: Protagonista;
  public directores: Array<Director>;
  public director: Director;
  public marcas: Array<Marca>;
  public marca: Marca;
	public url;

  constructor(
  		private _juegoService: JuegoService,
      private _protagonistaService: ProtagonistaService,
      private _directorService: DirectorService,
      private _marcaService: MarcaService,
      private _alquilerService: AlquilerService
  	) { 
     
      this.protagonista = new Protagonista(-1, '');
      this.director = new Director(-1, '');
      this.marca = new Marca(-1, '');
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getJuegos();
    this.getProtagonistas();
    this.getDirectores();
    this.getMarcas();
  }

  clickSearchProtagonista(idProtagonista){
    this.getJuegosByProtagonista(idProtagonista);
  }

  clickSearchDirector(idDirector){
    this.getJuegosByDirector(idDirector);
  }

  clickSearchMarca(idMarca){
    this.getJuegosByMarca(idMarca);
  }

  clickClean(){
    this.getJuegos();
    this.protagonista = new Protagonista(-1, '');
    this.director = new Director(-1, '');
    this.marca = new Marca(-1, '');
  }

  getJuegos(){
    this._juegoService.getJuegos().subscribe(
      response => {
        this.juegos = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }


  getJuegosByProtagonista(idProtagonista){
    this._juegoService.getJuegosByProtagonista(idProtagonista).subscribe(
      response => {
        this.juegos = response;
      },
      error => {
        console.log(<any>error);
        this.juegos = null;
      }
    )
  }

  getJuegosByDirector(idDirector){
    this._juegoService.getJuegosByDirector(idDirector).subscribe(
      response => {
        this.juegos = response;
      },
      error => {
        console.log(<any>error);
        this.juegos = null;
      }
    )
  }

  getJuegosByMarca(idMarca){
    this._juegoService.getJuegosByMarca(idMarca).subscribe(
      response => {
        this.juegos = response;
      },
      error => {
        console.log(<any>error);
        this.juegos = null;
      }
    )
  }

  getJuegoMaxAlquilado(){
    this._alquilerService.getJuegoMaxAlquilado().subscribe(
      response => {
        this.juegos = [];
        this.juegos.push(response);
      },
      error => {
        console.log(<any>error);
        this.juegos = null;
      }
    )
  }

  getProtagonistas(){
    this._protagonistaService.getProtagonistas().subscribe(
      response => {
        this.protagonistas = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getDirectores(){
    this._directorService.getDirectores().subscribe(
      response => {
        this.directores = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getMarcas(){
    this._marcaService.getMarcas().subscribe(
      response => {
        this.marcas = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
