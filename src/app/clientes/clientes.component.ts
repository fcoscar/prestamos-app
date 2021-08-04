import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-clientes',
  templateUrl:'./clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];


  constructor(private router:Router,private clienteService: ClienteService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(clienteId){
    this.clienteService.delete(clienteId).subscribe(
      json => {this.refresh()
      alert(`${json.mensaje}`)}
    );

  }
  refresh(): void {
    window.location.reload();
  }
}
