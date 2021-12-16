import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestConectar } from '../models/red-medica-models/requestconectar';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/red-medica-models/departamento';
import { Tipoproveedor } from '../models/red-medica-models/tipoproveedor';
import { Especialidad } from '../models/red-medica-models/especialidad';
import { Proveedor } from '../models/red-medica-models/proveedor';
import { BuscarProveedor } from '../models/red-medica-models/buscarproveedor';

@Injectable({
  providedIn: 'root'
})
export class RedproveedorService {

  requestConectar: RequestConectar;
  departamento: Departamento;
  tipoproveedor: Tipoproveedor;
  especialidad: Especialidad;
  bucar: Proveedor;
  buscarProveedor: BuscarProveedor;

  httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  };

  constructor( private httpClient: HttpClient ) {
    this.requestConectar = new RequestConectar();
    this.requestConectar.databaseName = 'SISAPER';
    this.requestConectar.token = environment.sisa.serviceToken;
    // Buscar Proveedor
    this.buscarProveedor = new BuscarProveedor();
    this.buscarProveedor.databaseName = 'SISAPER';
    this.buscarProveedor.token = environment.sisa.tokeprov;

  }

  conectar() {
    return this.httpClient.post(environment.sisa.conectar, this.requestConectar, this.httpOptions);
  }

  getDepartamentos(request2: BuscarProveedor ) {
    return this.httpClient.post(environment.sisa.getDepartamento, request2, this.httpOptions);
  }

  getTipoproveedor(request: BuscarProveedor) {
    return this.httpClient.post(environment.sisa.getTipoproveedor, request, this.httpOptions);
  }

  getEspecialidad(request: BuscarProveedor) {
    return this.httpClient.post(environment.sisa.getEspecialidada, request, this.httpOptions);
  }
// Obtengo resultado de todos los proveedores
  getProveedores(request: BuscarProveedor) {
    return this.httpClient.post(environment.sisa.getBuscar, request, this.httpOptions);
  }
// Obtengo resultado de un proveedor
  getProveedor(request: BuscarProveedor) {
    return this.httpClient.post(environment.sisa.getProveedor, request, this.httpOptions);
  }

}
