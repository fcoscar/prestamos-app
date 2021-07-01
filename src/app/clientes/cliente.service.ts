import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';



@Injectable()
export class ClienteService {
  private urlEndpoint: string = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpoint + '/guardar', cliente, {headers: this.httpHeaders});
  }

  getOne(clienteId): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/cliente/${clienteId}`);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/editar/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  delete(clienteId): Observable<Object>{
    return this.http.delete(`${this.urlEndpoint}/borrar/${clienteId}`);
  }
}
