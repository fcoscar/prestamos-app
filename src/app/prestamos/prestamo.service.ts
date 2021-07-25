import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prestamo } from 'src/app/prestamos/prestamo';
import { Observable } from 'rxjs';

@Injectable()
export class PrestamoService{
  private urlEndpoint :string = 'http://localhost:8080/prestamo';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient){ }

  createPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.urlEndpoint + '/guardar', prestamo, {headers: this.httpHeaders})
  }
  pagoPrestamo(prestamo: Prestamo){
    return this.http.put(`${this.urlEndpoint}/pago/${prestamo.prestamoId}/${prestamo.abonado}`, prestamo, {headers: this.httpHeaders})
  }
  getOne(prestamoId): Observable<Prestamo>{
    return this.http.get<Prestamo>(`${this.urlEndpoint}/${prestamoId}`);
  }
}
