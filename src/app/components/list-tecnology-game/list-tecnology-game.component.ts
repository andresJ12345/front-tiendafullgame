import { Component, OnInit } from '@angular/core';

import { TecnologiaJuego } from '../../models/tecnologiaJuego';
import { TecnologiaJuegoService } from '../../services/tecnologiaJuego.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-tecnology-game',
  templateUrl: './list-tecnology-game.component.html',
  styleUrls: ['./list-tecnology-game.component.css'],
  providers:[TecnologiaJuegoService]
})
export class ListTecnologyGameComponent implements OnInit {

	public tecnologiaJuegos: Array<TecnologiaJuego>;
	public url;
  constructor(
  		private _tecnologiaJuegoService: TecnologiaJuegoService
  	) { 
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getJuegos();
  }

  getJuegos(){
  	this._tecnologiaJuegoService.getTecnologiaJuegos().subscribe(
  		response => {
  			this.tecnologiaJuegos = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
