import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { AlquilerService } from '../../services/alquiler.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers:[ClienteService, AlquilerService]
})
export class ListClientsComponent implements OnInit {

	public clientes: Array<Cliente>;
	public url;
  constructor(
  		private _clienteService: ClienteService,
      private _alquilerService: AlquilerService
  	) { 
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getClientes();
  }

  getClientes(){
  	this._clienteService.getClientes().subscribe(
  		response => {
  			this.clientes = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  getClienteFrecuente(){
    this._alquilerService.getClienteFrecuente().subscribe(
      response => {
        this.clientes = [];
        this.clientes.push(response);
      },
      error => {
        console.log(<any>error);
        this.clientes = [];
      }
    )
  }

  resetForm(){
    this.ngOnInit();
  }

}
