import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService} from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: String = "Agregar Cliente"
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public createCliente(): void{
    this.clienteService.createCliente(this.cliente).subscribe(
      response => this.router.navigate(['/home'])//redigir
    );
  }
  }
