import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Emprendedores } from 'src/app/model/emprendedores';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  emprendedores: Emprendedores[];
  paginador: any;

  constructor( private miIguanaService: MiIguanaService, private activateRoute: ActivatedRoute) { }

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