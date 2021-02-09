import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()

export class ClienteService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(cliente): Observable<any>{
		let json = JSON.stringify(cliente);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.post(this.url + 'clientes', json, {headers: headers});
	}

	update(cliente): Observable<any>{
		let json = JSON.stringify(cliente);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.put(this.url + 'clientes', json, {headers: headers});
	}

	getClientes(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'clientes', {headers:headers});
	}

	getCliente(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'clientes/' + id, {headers:headers});
	}
}