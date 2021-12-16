import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registrar } from 'src/app/model/registrar';
import { Usuario } from 'src/app/model/usuario';
import { HttpService } from "src/app/services/http.service";
import { MiIguanaService } from 'src/app/services/miiguanasv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regristrate',
  templateUrl: './regristrate.component.html',
  styleUrls: ['./regristrate.component.css']
})
export class RegristrateComponent implements OnInit {

image =
  "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
name1;
age;
cuerpo;
loading = false;
buttionText = "Submit";
  public usuario: Usuario = new Usuario();
  public registrar: Registrar = new Registrar();

  usuarios: Usuario[];

  constructor( public miiguanaService: MiIguanaService, private reouter: Router,
    private activatedRoute: ActivatedRoute, public http: HttpService
    ) {
      this.usuarios
   }

  ngOnInit() { 

    console.log(this.http.test);

  }

  ngOnChanges(){

  }

  changeImage() {
    this.http.test = "changed";
    this.image =
      "https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  }


  
  public registrarUsuario():void{
    this.registrar.enabled = 1;
    this.miiguanaService.registrarusuario(this.registrar).subscribe(
      
    )    
    
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.registrar.nombre,
      email: this.registrar.email,
      tipo: 'registro',
      telefono: this.registrar.telefono 
    }
    this.http.sendEmailSms("https://intv1-prod.herokuapp.com/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
        const Toast = Swal.mixin({
          showConfirmButton: false,
          timer: 3000
        });
  
        Toast.fire({
          type: 'success',
          title: 'Usuario creado exitosamente',
          text: `Se enviara su información a su correo registrado`
          })
          this.reouter.navigate(['/inicio'])
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }



}


