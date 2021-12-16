import { Roles } from './roles';

export class Registrar {
    enabled: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    nombrenegocio: string;
    roles: Roles[];

    constructor() {
        this.roles = new Array<Roles>();
      }
   }
