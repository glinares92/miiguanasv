import { EspecialidadDetalle } from './especialidaddetalle';

export class Sucursal {
  codProveedor: string;
  codSucursal: string;
  nombre: string;
  tipoProveedor: string;
  especialidades: EspecialidadDetalle[];
  departamento: string;
  zona: string;
  direccion: string ;
  numTel1: string ;
  numTel2: string ;
  numTel3: string ;
  numCel1: string ;
  numCel2: string ;
  numFax: string ;
  numPBX: string ;
  email1: string;
  email2: string;
  horario: string ;
  latitud: number ;
  longitud: number ;
  zoom: number;
  pin: any;

  constructor() {
    this.especialidades = new Array<EspecialidadDetalle>();
  }
}


