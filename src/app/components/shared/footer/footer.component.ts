import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  hoy: any = new Date();

  constructor() {

   }

  activarMercadoValores() {
    Swal.fire({
      title: 'Esta información se encuentra fuera del sitio de SISA',
      imageUrl: 'assets/img/banner-inicio.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: true,
      showConfirmButton: false,
      // tslint:disable-next-line:max-line-length
      html: '<a class="btn btn-primary btn-blue-primary3" href="#">Ir al Sitio<span class= "sr-only" > (current) < /span></a >',

    });
  }

  activarRegistroComercializadores() {
    Swal.fire({
      title: 'Esta información se encuentra fuera del sitio de Mi Iguana SV',
      imageUrl: 'assets/img/banner1.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: true,
      showConfirmButton: false,
      // tslint:disable-next-line:max-line-length
      html: '<a class="btn btn-primary btn-blue-primary3" href="#">Ir al Sitio<span class= "sr-only" > (current) < /span></a >',

    });
  }

  ngOnInit() {
  }

}
