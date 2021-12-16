import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactenos-red-emprendedores',
  templateUrl: './contactenos-red-emprendedores.component.html',
  styleUrls: ['./contactenos-red-emprendedores.component.css']
})
export class ContactenosRedEmprendedoresComponent implements OnInit {

  
  constructor(public router: Router) {
  }

  iguana = {
    telefono: '2241-0000',
    whatsapp: '50371457472',
    email: 'servicioalcliente@iguana.com.sv',
    email2: 'creditos.hospitalarios@iguana.com.sv',
    email3: 'precertificaciones@iguana.com.sv',
    direccion1: 'Carretera a Santa Tecla',
    // tslint:disable-next-line:max-line-length
    direccion2: 'Av. Independencia sur y bul. Nicolás Salume (bypass hacia Metapán).',
    // tslint:disable-next-line:max-line-length
    direccion3: 'Paseo General Escalón ',
    latitude: 13.672219,
    longitude: -89.274161,
    zoom: 9,
    pin: 'assets/img/pinsisa2.png',
    // tslint:disable-next-line:max-line-length
    santatecla: 'https://goo.gl/maps/nNa8785p2Ps9wH3x6',
    // tslint:disable-next-line:max-line-length
    santaana: 'https://goo.gl/maps/WX5PeMfmW81NYW2U6',
    // tslint:disable-next-line:max-line-length
    caribe: 'https://goo.gl/maps/fDNTpwieLLTZAaV39',
    // tslint:disable-next-line: no-use-before-declare
    mapa: [
      {
        telefono: '2241-1350',
        whatsapp: '50372352056',
        email: 'servicioalcliente@iguana.com.sv',
        direccion: 'Carretera a Santa Tecla',
        latitude: 13.671976,
        longitude: -89.274179,
        zoom: 17,
        pin: 'assets/img/pinsisa2.png',
        comollegar: 'https://goo.gl/maps/nNa8785p2Ps9wH3x6',
      },
      {
        telefono: '2202-5716',
        whatsapp: '50372352056',
        email: 'servicioalcliente@iguana.com.sv',
        // tslint:disable-next-line:max-line-length
        direccion: 'Av. Independencia sur y bul. Nicolás Salume (bypass hacia Metapán).',
        latitude: 13.977321,
        longitude: -89.560152,
        zoom: 17,
        pin: 'assets/img/pinsisa2.png',
        comollegar: 'https://goo.gl/maps/WX5PeMfmW81NYW2U6',
      },
      {
        telefono: ' 2423-5990',
        whatsapp: '50372352056',
        email: 'servicioalcliente@iguana.com.sv',
        // tslint:disable-next-line:max-line-length
        direccion: 'Paseo General Escalón',
        latitude: 13.701357,
        longitude: -89.226721,
        zoom: 17,
        pin: 'assets/img/pinsisa2.png',
        comollegar: 'https://goo.gl/maps/fDNTpwieLLTZAaV39',

      },

    ]
  };



  ngOnInit() {

  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }



}


// tslint:disable-next-line:class-name
export class iguana {
  telefono: string;
  whatsapp: any;
  email: any;
  email2: any;
  email3: any;
  direccion1: any;
  direccion2: any;
  direccion3: any;
  latitude: String;
  longitude: String;
  zoom: number;
  pin: any;
  santatecla: any;
  santaana: any;
  caribe: any;
  mapa: MAPA[];
}

export class MAPA {
  telefono: string;
  whatsapp: any;
  email: any;
  direccion: any;
  latitude: String;
  longitude: String;
  zoom: number;
  pin: any;
  comollegar: any;
}
