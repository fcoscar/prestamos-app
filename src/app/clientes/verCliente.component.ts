import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService} from './cliente.service';
import { ActivatedRoute } from '@angular/router';
import { PrestamoService } from 'src/app/prestamos/prestamo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verCliente',
  templateUrl: './verCliente.component.html'
})
export class VerClienteComponent implements OnInit {
  cliente: Cliente;
  clienteId;

  constructor(private _Activatedroute:ActivatedRoute, private clienteService: ClienteService, private prestamoService: PrestamoService, private router: Router) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.clienteId = params.get('clienteId');
    });

    this.clienteService.getOne(this.clienteId).subscribe(
      cliente => this.cliente = cliente
    );
    }

  pagoPrestamo(prestamo): void{
    this.prestamoService.pagoPrestamo(prestamo).subscribe(
      json => {this.refresh()//redigir
      alert(`${json.response.mensaje}`);
      }
    );

  }

  refresh(): void {
    window.location.reload();
}


}
