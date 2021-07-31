import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { Router} from "@angular/router";


@Injectable()
export class ClienteService {
  private urlEndpoint: string = 'http://localhost:8081';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})


  constructor(private http: HttpClient, private router:Router) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }

  createCliente(cliente: Cliente): Observable<any>{
    return this.http.post<any>(this.urlEndpoint + '/guardar', cliente, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        alert(err.error.mensaje);
        return throwError(err);
      })
    );
  }

  getOne(clienteId): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/cliente/${clienteId}`).pipe(
      catchError(err => {
        this.router.navigate(['/home']);
        alert(err.error.mensaje);
        return throwError(err);
      })
    );
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put(`${this.urlEndpoint}/editar/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      map((response:any) => response.cliente as Cliente),
      catchError(err => {
        alert(err.error.mensaje);
        return throwError(err);
      })
    );

  }

  delete(clienteId): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/borrar/${clienteId}`).pipe(
      catchError(err => {
        alert(err.error.mensaje);
        return throwError(err);
      })
    );

  }
}
