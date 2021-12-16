import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Sucursal } from 'src/app/models/red-medica-models/sucursal';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-emprendedor-tarjeta',
  templateUrl: './emprendedor-tarjeta.component.html',
  styleUrls: ['./emprendedor-tarjeta.component.css']
})
export class EmprendedorTarjetaComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() sucursal: Sucursal;

  @Output() eventoSucursalSeleccionada: EventEmitter<Sucursal>;
  @Output() showDetalle: EventEmitter<boolean>;

  constructor(private router: Router) {
    this.eventoSucursalSeleccionada = new EventEmitter();
    this.showDetalle = new EventEmitter();
  }

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 0));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  detalleProveedor() {
    this.eventoSucursalSeleccionada.emit(this.sucursal);
    this.showDetalle.emit(true);
  }

}
