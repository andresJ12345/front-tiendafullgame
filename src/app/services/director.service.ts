import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../models/director';
import { global } from './global';

@Injectable()

export class DirectorService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	getDirectores(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'directores', {headers:headers});
	}

	getDirector(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url + 'directores/' + id, {headers:headers});
	}
}