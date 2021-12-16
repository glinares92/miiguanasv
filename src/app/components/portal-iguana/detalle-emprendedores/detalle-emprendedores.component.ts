import { Component, OnInit } from '@angular/core';
import { Emprendedores } from 'src/app/model/emprendedores';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-emprendedores',
  templateUrl: './detalle-emprendedores.component.html',
  styleUrls: ['./detalle-emprendedores.component.css']
})
export class DetalleEmprendedoresComponent implements OnInit {

  emprendedores: Emprendedores[];
  paginador: any;

  constructor( private miIguanaService: MiIguanaService, private activateRoute: ActivatedRoute) {
    
 }
 
  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe( params => {
      let page:number = +params.get('page');

      if( !page){
        page = 0;
      }

    this.miIguanaService.getEmprendedores(page).pipe(
      tap(response => {
        (response.content as Emprendedores[]).forEach(emprendedores => {

        });

      })
    ).subscribe(response => {this.emprendedores = response.content as Emprendedores[];
                              this.paginador = response});
  })
  }


  deleteEmprendedor(emprendedores: Emprendedores): void {

        this.miIguanaService.deleteEmprendedor(emprendedores.codEmp).subscribe(
          response => {
            this.emprendedores = this.emprendedores.filter(emp => emp !== emprendedores )
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