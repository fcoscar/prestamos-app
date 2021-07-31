import { Component, OnInit } from '@angular/core';
import { Prestamo } from './prestamo';
import { PrestamoService} from './prestamo.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pform',
  templateUrl: './pform.component.html'
})
export class PFormComponent implements OnInit {
  public prestamo: Prestamo = new Prestamo();
  public titulo: String = "Agregar Prestamo";
  public cliente: Cliente;
  clienteId;
  constructor(private clienteService: ClienteService, private prestamoService: PrestamoService,private _Activatedroute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.clienteId = params.get('clienteId');
    });

    this.clienteService.getOne(this.clienteId).subscribe(
      cliente => this.prestamo.cliente = cliente
    );
    }

  public createPrestamo(): void{
    this.prestamoService.createPrestamo(this.prestamo).subscribe(
      json => {
        this.router.navigate(['/cliente', this.prestamo.cliente.id])//redigir
        alert(`${json.mensaje}`);
      }
    );
  }

  }

