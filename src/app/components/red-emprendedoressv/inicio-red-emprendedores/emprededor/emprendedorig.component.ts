import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedproveedorService } from '../../../../services/redproveedor.service';
import { Conectar } from 'src/app/models/red-medica-models/conectar';
import { RequestRedProveedor } from 'src/app/models/red-medica-models/requestRedProveedor';
import { BuscarProveedor } from 'src/app/models/red-medica-models/buscarproveedor';
import { DetalleProveedor } from 'src/app/models/red-medica-models/detalleproveedor';
import { Sucursal } from 'src/app/models/red-medica-models/sucursal';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';

@Component({
  selector: 'app-emprendedorig',
  templateUrl: './emprendedorig.component.html',
  styleUrls: ['./emprendedorig.component.css']
})
export class EmprendedorigComponent implements OnInit {

  buscarProveedor = new BuscarProveedor();
  conectar = new Conectar();
  request = new RequestRedProveedor();
  proveedores: DetalleProveedor = new DetalleProveedor();

  // tslint:disable-next-line:no-inferrable-types
  zoom: number = 14;
  pin: any = 'assets/img/pinsisa2.png';
  latitud: number;
  longitud: number;
  pin2:any = 'assets/img/pinsisa.png';
  lati: number;
  longi: number;

  @Input() proveedor: Sucursal = new Sucursal();

  @Output() ocultarDetalle: EventEmitter<boolean>;

  constructor(private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line:variable-name
              private _redProveedorService: RedproveedorService,
              private miIguanaService: MiIguanaService,) {

    this.ocultarDetalle = new EventEmitter();

    this.activatedRoute.params.subscribe(params => {


      this._redProveedorService.conectar().subscribe((data: Conectar) => {
        this.conectar = data;

        this.request.databaseName = 'SISAPER';
        this.request.token = this.conectar.token;
        this.buscarProveedor.databaseName = 'SISAPER';
        this.buscarProveedor.token = this.conectar.token;
        this.buscarProveedor.codProveedor = this.proveedor.codProveedor;

        this.proveedores.sucursal = this.proveedor;
        this.latitud = this.proveedores.sucursal.latitud;
        this.longitud = this.proveedores.sucursal.longitud;
        this.proveedores.sucursal.zoom = this.zoom;
        this.proveedores.sucursal.pin = this.pin;


      });
    });

  }

  ngOnInit(): void {
    this.getLocation();   
  }
  
  
   getLocation() {
    this.miIguanaService.getPosition().then(pos => {
        this.lati = pos.lat;
        this.longi = pos.lng;
        
    });
  }

  regresar() {
    this.ocultarDetalle.emit(false);
  }
}
