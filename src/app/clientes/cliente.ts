import { Prestamo } from 'src/app/prestamos/prestamo';
export class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  fecha: string;
  prestamo: Prestamo[];
}
