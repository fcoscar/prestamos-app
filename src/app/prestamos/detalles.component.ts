import { Component, OnInit } from '@angular/core';
import { Prestamo } from './prestamo';
import { PrestamoService } from './prestamo.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/clientes/cliente.service';

@Component({
  selector: 'app-DetallesPrestamo',
  templateUrl: 'detalles.component.html'
})
export class DetallesPrestamo implements OnInit{
prestamo: Prestamo;
prestamoId;
clienteId;


  constructor(private clienteService: ClienteService,private _Activatedroute:ActivatedRoute, private prestamoService: PrestamoService) { };

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe( params =>{
      this.prestamoId = params.get('prestamoId')
    });

    this._Activatedroute.paramMap.subscribe( params =>{
      this.clienteId = params.get('clienteId')
    });

    this.prestamoService.getOne(this.prestamoId).subscribe(
      prestamo => this.prestamo = prestamo
    );

    this.clienteService.getCliente(this.clienteId).subscribe(
      cliente => this.prestamo.cliente = cliente
    );

  }




}
