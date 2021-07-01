import { Cliente } from 'src/app/clientes/cliente';
import { MovPrestamo } from 'src/app/movPrestamos/movPrestamo';
export class Prestamo{
  prestamoId: number;
  descripcion: string;
  monto: number;
  monto_inicial: number;
  cuotas: number;
  cuota_inicial: number;
  cliente: Cliente;
  saldoXmes: number;
  movimientos: MovPrestamo[];
  fecha: string;
}
