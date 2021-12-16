import { Component, OnInit } from '@angular/core';
import { Emprendedores } from 'src/app/model/emprendedores';
import { MiIguanaService } from 'src/app/services/miiguanasv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-mtto-c',
  templateUrl: './form-mtto-c.component.html',
  styleUrls: ['./form-mtto-c.component.css']
})
export class FormMttoCComponent implements OnInit {

  public emprendedor: Emprendedores = new Emprendedores();
  departamento: Departamentos;

  constructor( public miiguanaService: MiIguanaService, public reouter: Router,
    public activatedRoute: ActivatedRoute
    ) {
    
   }

  ngOnInit() { 
    this.getLocation();   
    this.cargarEmprendedor();

  }


  getLocation() {
    this.miiguanaService.getPosition().then(pos => {
        this.emprendedor.latitude = pos.lat;
        this.emprendedor.longitude = pos.lng;
    });
  }

  
  public create():void{
    this.miiguanaService.crearEmprendedores(this.emprendedor).subscribe(
      response => this.reouter.navigate(['/detalle-emprendedores'])
    )
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      type: 'success',
      title: 'Emprendedor creado con Exito!'
    });
  }

  cargarEmprendedor(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.miiguanaService.getEmprendedor(id).subscribe((emprendedor) => this.emprendedor = emprendedor)
      }
    })
  }

  updateEmprededor():void{
    this.miiguanaService.updateEmprendedor(this.emprendedor)
    .subscribe(emprendedor => {
      this.reouter.navigate(['/detalle-emprendedores'])
    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      type: 'success',
      title: 'Emprendedor Actualizado con Exito!'
    });

  }


}
