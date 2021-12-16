import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emprendedoresagm } from 'src/app/model/emprendedoresagm';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';


@Component({
  selector: 'app-donde-estoy',
  templateUrl: './donde-estoy.component.html',
  styleUrls: ['./donde-estoy.component.css']
})
export class DondeEstoyComponent implements OnInit {

  emprendedores: Emprendedoresagm;
  emprendedoresagm: Emprendedoresagm;
  mapa: MAPA;
  zoom = 3;
  pin:any = 'assets/img/pinsisa2.png';
  pin2:any = 'assets/img/pinsisa.png';
  lati: number;
  longi: number;
  

  constructor( private miIguanaService: MiIguanaService, private router: Router) {

    this.miIguanaService.getEmprendedoresagm().subscribe((emprededor: Emprendedoresagm) =>{
      this.emprendedoresagm = emprededor;
    })      
 }

 ngOnInit() { 
  this.getLocation();   
}


 getLocation() {
  this.miIguanaService.getPosition().then(pos => {
      this.lati = pos.lat;
      this.longi = pos.lng;
      
  });
}




  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }



}


export class MAPA {
  telefono: string;
  whatsapp: any;
  email: any;
  direccion: any;
  latitude2: String;
  longitude2: String;
  zoom: number;
  pin: any;
  comollegar: any;
}
