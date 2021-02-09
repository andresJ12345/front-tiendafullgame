import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TecnologiaJuego } from '../models/tecnologiaJuego';
import { global } from './global';

@Injectable()

export class TecnologiaJuegoService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(tecnologiaJuego): Observable<any>{
		let json = JSON.stringify(tecnologiaJuego);

		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url + 'tecnologia-juegos', json, {headers:headers});
	}

	getTecnologiaJuegos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'tecnologia-juegos', {headers:headers});
	}

	getTecnologiaJuego(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'tecnologia-juegos/' + id, {headers:headers});
	}

	getTecnologiaJuegoByJuego(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'tecnologia-juegos/juego/' + id, {headers:headers});
	}
}