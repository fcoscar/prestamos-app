import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService} from './cliente.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: String = "Agregar Cliente";
  constructor(private clienteService: ClienteService, private router: Router, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public createCliente(): void{
    this.clienteService.createCliente(this.cliente).subscribe(
      json => {
        this.router.navigate(['/home'])//redigir
        alert(`${json.mensaje}: ${json.cliente.nombre +" "+json.cliente.apellido}`)}
    );
  }

  public cargarCliente(): void{
    this._Activatedroute.paramMap.subscribe(params => {
     let clienteId = params.get('clienteId');
     if(clienteId){
       this.clienteService.getOne(clienteId).subscribe(
         cliente => this.cliente = cliente
       );
     }
    });


  }

  public update(): void{
    this.clienteService.update(this.cliente).subscribe(
      cliente => { this.router.navigate(['/cliente/', cliente.id])
      alert(` El cliente ${cliente.nombre +" "+ cliente.apellido} ha sido creado correctamente`)}
    )
  }
  }
