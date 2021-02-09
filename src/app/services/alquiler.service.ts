import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()

export class AlquilerService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(alquiler): Observable<any>{
		let json = JSON.stringify(alquiler);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.post(this.url + 'alquileres', json, {headers: headers});
	}

	update(alquiler): Observable<any>{
		let json = JSON.stringify(alquiler);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.put(this.url + 'alquileres', json, {headers: headers});
	}

	getAlquileres(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres', {headers:headers});
	}

	getAlquiler(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres/' + id, {headers:headers});
	}

	getPrecioAlquiler(precio, fechaInicio, FechaFin): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres/precio/' + precio + '/' + fechaInicio + '/' + FechaFin, {headers:headers});
	}

	getJuegoMaxAlquilado(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres/juego-max-alquilado', {headers:headers});
	}

	getVentaDia(fecha): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres/fecha-inicio/' + fecha, {headers:headers});
	}

	getClienteFrecuente(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'alquileres/cliente-frecuente', {headers:headers});
	}
}