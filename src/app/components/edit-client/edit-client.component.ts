import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-edit-client',
  templateUrl: '../register-client/register-client.component.html',
  styleUrls: ['../register-client/register-client.component.css'],
  providers: [ClienteService]
})
export class EditClientComponent implements OnInit {

	public cliente: Cliente;
	public url;
	public status;
	public isEdit: boolean;

  constructor(
  		private _route: ActivatedRoute,
      	private _router: Router,
  		private _clienteService: ClienteService
  	) {
  		this.cliente = new Cliente('','','','',null);
  		this.url = global.url;
  		this.isEdit = true;
  	 }

  ngOnInit(): void {
  	this.getCliente();
  }

  onSubmit(form){
  	this._clienteService.update(this.cliente).subscribe(
    response => {
     	this.status = 'success';
        this.cliente = response;
     	form.reset();
    },
    error => {
    	this.status = 'error';
      	console.log(<any>error);
    });
  }

  getCliente() {
  	// Sacar el parametro de URL
  	this._route.params.subscribe(params=>{

  		let id = params['id'];
  		// Hacer una petición AJAX para conseguir los juegos
  		this._clienteService.getCliente(id).subscribe(
  				response => {
  					this.cliente = response;
  					console.log(this.cliente);
  				},
  				error => {
  					console.log(<any>error);
  					this._router.navigate(['/home']);
  				}
  			);
  	});
  }
}
