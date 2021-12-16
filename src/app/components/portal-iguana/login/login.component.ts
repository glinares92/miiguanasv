import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:string = 'Por favor Iniciar Seción';
  usuario:Usuario

  constructor(private authService: AuthService, private router: Router) {

    this.usuario = new Usuario();

   }

  ngOnInit() {

    if(this.authService.isAuthenticated()){
      this.router.navigate(['/estoy-aqui'])

    }
  }

  login():void{
    console.log(this.usuario);
    if(this.usuario.username == null || this.usuario.password == null){
      // const Toast =  swal('Error Login', 'Email o Contraseña vacias','error');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: 'error',
        title: 'Error al iniciar sesión',
        text: 'Email o contraseña vacias!',
      });
      
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      let pauload = JSON.parse(atob(response.access_token.split(".")[1]));
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;


      this.router.navigate(['/estoy-aqui']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: 'success',
        title: 'Inicio de sesión exitosa'
      });
      
    }, err => {
      if(err.status == 400) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
  
        Toast.fire({
          type: 'error',
          title: 'Error al iniciar sesión',
          text: 'Usuario o Contraseña son incorrectas!',
        });
        
      }
    }
    );
    
  }

}
