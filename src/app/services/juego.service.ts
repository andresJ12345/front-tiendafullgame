import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()

export class JuegoService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(juego): Observable<any>{
		let json = JSON.stringify(juego);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.post(this.url + 'juegos', json, {headers: headers});
	}

	update(juego): Observable<any>{
		let json = JSON.stringify(juego);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.put(this.url + 'juegos', json, {headers: headers});
	}

	getJuegos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'juegos', {headers:headers});
	}

	getJuego(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'juegos/' + id, {headers:headers});
	}

	getJuegosByProtagonista(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'juegos/protagonista/' + id, {headers:headers});
	}

	getJuegosByDirector(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'juegos/director/' + id, {headers:headers});
	}

	getJuegosByMarca(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'juegos/marca/' + id, {headers:headers});
	}
}