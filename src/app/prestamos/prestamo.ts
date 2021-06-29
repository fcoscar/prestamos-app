import { Cliente } from 'src/app/clientes/cliente';
export class Prestamo{
  id: number;
  descripcion: string;
  monto: number;
  montoInicial: number;
  cuotas: number;
  cuotaInicial: number;
  cliente: Cliente;
  saldoXmes: number;
}
