import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Protagonista } from '../models/protagonista';
import { global } from './global';

@Injectable()

export class ProtagonistaService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	getProtagonistas(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'protagonistas', {headers:headers});
	}

	getProtagonista(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'protagonistas/' + id, {headers:headers});
	}
}