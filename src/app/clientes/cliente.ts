import { Prestamo } from 'src/app/prestamos/prestamo';
export class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  fecha: string;
  prestamos: Prestamo[];
  telefono: string;
}
