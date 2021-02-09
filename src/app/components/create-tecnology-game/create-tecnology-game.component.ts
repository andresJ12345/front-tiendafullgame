import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { TecnologiaJuego } from '../../models/tecnologiaJuego';
import { JuegoService } from '../../services/juego.service';
import { TecnologiaService } from '../../services/tecnologia.service';
import { TecnologiaJuegoService } from '../../services/tecnologiaJuego.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create-tecnology-game',
  templateUrl: './create-tecnology-game.component.html',
  styleUrls: ['./create-tecnology-game.component.css'],
  providers: [TecnologiaJuegoService, JuegoService, TecnologiaService]
})
export class CreateTecnologyGameComponent implements OnInit {
		public tecnologiaJuego: TecnologiaJuego;
		public juegos;
		public tecnologias;
		public url;
		public isEdit: boolean;
		public status;
		public idJuego: number;
  constructor(
      private _tecnologiaJuegoService: TecnologiaJuegoService,
  		private _juegoService: JuegoService,
  		private _tecnologiaService: TecnologiaService,
  		private _route: ActivatedRoute,
      	private _router: Router,
  	) { 
		this._route.params.subscribe(params=>{

			let id = +params['id'];
			// Setear el ID del juego que se obtiene de la URL
			if(id){
				this.idJuego = id;
			}else{
				this.idJuego = -1;
			}
		});
  		this.tecnologiaJuego = new TecnologiaJuego(null,this.idJuego,-1);
  		this.isEdit = false;
  }

  ngOnInit(): void {
  	this.getJuegos();
  	this.getTecnologia();
  }

  onSubmit(form){
    this._tecnologiaJuegoService.create(this.tecnologiaJuego).subscribe(
    response => {
       this.status = 'success';
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
  	)
  }

  getTecnologia(){
  	this._tecnologiaService.getTecnologias().subscribe(
  		response => {
  			this.tecnologias = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
