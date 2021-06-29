import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService} from './cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verCliente',
  templateUrl: './verCliente.component.html'
})
export class VerClienteComponent implements OnInit {
  cliente: Cliente;
  clienteId;

  constructor(private _Activatedroute:ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
    this.clienteId = params.get('clienteId');


    this.clienteService.getCliente(this.clienteId).subscribe(
      cliente => this.cliente = cliente
    );
});




  }

  }
