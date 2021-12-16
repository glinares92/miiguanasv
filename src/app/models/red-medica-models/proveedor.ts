import { Sucursal } from './sucursal';

export class Proveedor {
  codigo: string;
  mensaje: string;
  sucursales: Sucursal[];

   constructor() {
     this.sucursales = new Array<Sucursal>();
   }
}
