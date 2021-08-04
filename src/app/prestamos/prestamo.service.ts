import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prestamo } from 'src/app/prestamos/prestamo';
import {Observable, throwError} from 'rxjs';
import { catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class PrestamoService{
  private urlEndpoint :string = 'http://localhost:8080/prestamo';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient, private router:Router){ }

  createPrestamo(prestamo: Prestamo): Observable<any> {
    return this.http.post<any>(this.urlEndpoint + '/guardar', prestamo, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        alert(err.error.mensaje);
        return throwError(err);
      })
    )
  }
  pagoPrestamo(prestamo: Prestamo): Observable<any>{
    return this.http.put<any>(`${this.urlEndpoint}/pago/${prestamo.prestamoId}/${prestamo.abonado}`, prestamo, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        alert(err.error.mensaje);
        return throwError(err);
      })
    )
  }
  getOne(prestamoId): Observable<Prestamo>{
    return this.http.get<Prestamo>(`${this.urlEndpoint}/${prestamoId}`).pipe(
      catchError(err => {
        this.router.navigate(['/home']);
        alert(err.error.mensaje);
        return throwError(err);
      })
    );
  }
}
