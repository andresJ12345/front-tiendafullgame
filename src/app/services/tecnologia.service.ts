import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/tecnologia';
import { global } from './global';

@Injectable()

export class TecnologiaService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	getTecnologias(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'tecnologias', {headers:headers});
	}

	getTecnologia(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'tecnologias/' + id, {headers:headers});
	}
}