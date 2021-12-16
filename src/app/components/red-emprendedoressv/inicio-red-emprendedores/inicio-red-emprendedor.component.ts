import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RedproveedorService } from '../../../services/redproveedor.service';
import { Conectar } from 'src/app/models/red-medica-models/conectar';
import { Departamento } from 'src/app/models/red-medica-models/departamento';
import { Tipoproveedor } from 'src/app/models/red-medica-models/tipoproveedor';
import { Especialidad } from 'src/app/models/red-medica-models/especialidad';
import { Proveedor } from 'src/app/models/red-medica-models/proveedor';
import { BuscarProveedor } from 'src/app/models/red-medica-models/buscarproveedor';
import { FormularioBuscar } from 'src/app/models/red-medica-models/formulariobuscar';
import { Sucursal } from 'src/app/models/red-medica-models/sucursal';
import Swal from 'sweetalert2';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-inicio-red-emprendedor',
  templateUrl: './inicio-red-emprendedor.component.html',
  styleUrls: ['./inicio-red-emprendedor.component.css']
})
export class InicioRedEmprendedorComponent implements OnInit {
  // Arreglos de Servicios
  conectar = new Conectar();
  request = new BuscarProveedor();
  buscarProveedor = new BuscarProveedor();
  departamentos: Departamento[] = [];
  tipoproveedor: Tipoproveedor;
  especialidades: Especialidad;
  buscar: Proveedor;
  // formulario: FormularioBuscar = new FormularioBuscar();
  mensaje = '';

  sucursalSeleccionada: Sucursal;
  mostrarDetalle = false;


  formulario: FormularioBuscar = {
    codDepartamento: '',
    codTipoProveedor: '',
    codTipoEspecialidad: '',
    nombreProveedor: '',
  };

  currentPage = 1;
  // tslint:disable-next-line:variable-name
  constructor(private redProveedorService: RedproveedorService, private router: Router) {


    // Conectarme a SISAPER
    this.redProveedorService.conectar().subscribe((data: Conectar) => {
      this.conectar = data;
      // console.log(data);
      this.request.databaseName = 'SISAPER';
      this.request.token = this.conectar.token;
      this.buscarProveedor.databaseName = 'SISAPER';
      this.buscarProveedor.token = this.conectar.token;

      // Obtener Departamentos
      this.redProveedorService.getDepartamentos(this.request).subscribe((deptos: Departamento[]) => {
        this.departamentos = deptos;
        
      });
      // Obtener Tipo Proveedor
      this.redProveedorService.getTipoproveedor(this.request).subscribe((tiprov: Tipoproveedor) => {
        this.tipoproveedor = tiprov;
      });

      // Obtener Especialidad
      this.redProveedorService.getEspecialidad(this.request).subscribe((especi: Especialidad) => {
        this.especialidades = especi;
      });

      // Para promocion dejo aqui Obtener Resultado de Proveedores con San Miguel 'SSA'
      this.redProveedorService.getProveedores(this.buscarProveedor).subscribe((resu: Proveedor) => {
        this.buscar = resu;
      });

    });
  }

  buscarProveedores() {
    this.mostrarDetalle = false;
    this.sucursalSeleccionada = new Sucursal();
    // DEP
    this.buscarProveedor.codEstado = this.formulario.codDepartamento;
    // TIPPROV
    this.request.codEstado = this.buscarProveedor.codEstado;
    this.buscarProveedor.tipoProveedor = this.formulario.codTipoProveedor;
    // CODSPECI
    this.request.tipoProveedor = this.buscarProveedor.tipoProveedor;
    this.buscarProveedor.codEspecialidad = this.formulario.codTipoEspecialidad;
    // BUSQUEDA POR NOMBRE
    this.buscarProveedor.nombreProveedor = this.formulario.nombreProveedor;


    // tslint:disable-next-line:max-line-length
    if (this.buscarProveedor.tipoProveedor !== 'MEDI'
      && this.buscarProveedor.tipoProveedor !== 'ODON'
      && this.buscarProveedor.codEspecialidad !== '') {
      this.limpiarEspecialidad();
    }


    this.redProveedorService.getTipoproveedor(this.request).subscribe((tiprov: Tipoproveedor) => {
      this.tipoproveedor = tiprov;
    });

    this.redProveedorService.getEspecialidad(this.request).subscribe((especi: Especialidad) => {
      this.especialidades = especi;
    });

    this.redProveedorService.getProveedores(this.buscarProveedor).subscribe((resu: Proveedor) => {
      this.buscar = resu;

      if (this.buscar.codigo === '01200') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'success',
          title: 'Proveedor Encontrado'
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'No se encontraron proveedores',
          text: 'Puedes intentar con otra consulta!',
        });
      }
    });

  }

  limpiarFormulario() {
    this.formulario.nombreProveedor = '';
    this.formulario.codTipoEspecialidad = '';
    this.formulario.codTipoProveedor = '';
    this.formulario.codDepartamento = '';
    this.buscarProveedor.nombreProveedor = '';
    this.buscarProveedor.tipoProveedor = '';
    this.buscarProveedor.codEspecialidad = '';
    this.buscarProveedor.codEstado = '';
  }

  limpiarDepartamento() {
    this.formulario.nombreProveedor = '';
    this.formulario.codTipoEspecialidad = '';
    this.formulario.codTipoProveedor = '';
    this.buscarProveedor.tipoProveedor = '';
    this.buscarProveedor.codEspecialidad = '';
    this.buscarProveedor.nombreProveedor = '';
  }

  limpiarEspecialidad() {
    this.formulario.nombreProveedor = '';
    this.formulario.codTipoEspecialidad = '';
    this.buscarProveedor.codEspecialidad = '';
    this.buscarProveedor.nombreProveedor = '';
    // this.formulario.codTipoProveedor = '';
  }

  limpiarBuscarnombre() {
    this.formulario.nombreProveedor = '';
    this.buscarProveedor.nombreProveedor = '';
  }

  ngOnInit() {

  }

  detalleProveedor(sucursal: Sucursal) {
    this.router.navigate(['/redemprendedores', sucursal.codProveedor, sucursal.codSucursal]);
  }

  setFormulario(event) {
    this.formulario = event;
    // console.log(this.buscarProveedores);
  }

  setSucursalSeleccionada(sucursalSeleccionada: Sucursal) {
    this.sucursalSeleccionada = sucursalSeleccionada;
    // console.log('Emitio evento: ' + this.sucursalSeleccionada.codProveedor);
  }

  setShowDetalle(event) {
    this.mostrarDetalle = event;
  }

}
