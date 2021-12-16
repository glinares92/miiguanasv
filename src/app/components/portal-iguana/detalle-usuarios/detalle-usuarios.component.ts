import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Usuario } from 'src/app/model/usuario';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {

  usuario: Usuario[];
  paginador: any;

  constructor( private miIguanaService: MiIguanaService, private activateRoute: ActivatedRoute) {
    
 }
 
  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe( params => {
      let page:number = +params.get('page');

      if( !page){
        page = 0;
      }

    this.miIguanaService.getUsuarios(page).pipe(
      tap(response => {
        (response.content as Usuario[]).forEach(usuario => {
          console.log(this.usuario);
          
        });

      })
    ).subscribe(response => {this.usuario = response.content as Usuario[];
                              this.paginador = response});
  })
  }


  deleteUsuario(usuario: Usuario): void {

        this.miIguanaService.deleteUsuario(usuario.id).subscribe(
          response => {
            this.usuario = this.usuario.filter(emp => emp !== usuario )
          }
        )

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
  
        Toast.fire({
          type: 'success',
          title: 'Emprendedor Eliminado con Exito!'
        });


    }
}