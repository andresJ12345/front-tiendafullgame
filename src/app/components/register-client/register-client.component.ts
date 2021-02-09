import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
  providers: [ClienteService]
})
export class RegisterClientComponent implements OnInit {

	public cliente: Cliente;
	public url;
	public status;
	public isEdit: boolean;

  constructor(
  		private _clienteService: ClienteService
  	) {
  		this.cliente = new Cliente('','','','',null);
  		this.url = global.url;
  		this.isEdit = false;
  	 }

  ngOnInit(): void {
  }

  onSubmit(form){
  	this._clienteService.create(this.cliente).subscribe(
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
}
