import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of, Observable, throwError } from 'rxjs';
import { Departamentos } from '../model/departamentos';
import { url } from 'inspector';
import { Negocios } from '../model/negocios';
import { Emprendedores } from '../model/emprendedores';
import { request } from 'http';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Emprendedoresagm } from '../model/emprendedoresagm';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Registrar } from '../model/registrar';

@Injectable({
    providedIn: 'root'
  })

  export class MiIguanaService {
    

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor( private http: HttpClient, private authService: AuthService,
                private router: Router) { }


                private agregarAurhorizationHeader(){
                  let token = this.authService.token;
                  if(token != null){
                    return this.httpHeaders.append('Authorization','Bearer' + token);
                  }
                  return this.httpHeaders;
                }


    getPosition(): Promise<any> {
      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resp => {
                  resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
              },
              err => {
                  reject(err);
            });
      });
  }




    getDepartamentos():Observable<any>{
      return this.http.get<any>(environment.miiguana.departamentos);
    } 


    getRubro(negocios: Negocios): Observable<any>{
      return this.http.get<Negocios>(environment.miiguana.rubro);
    }

    getEmprendedores(page: number): Observable<any>{
      return this.http.get(environment.miiguana.emprendedores+'/page/'+page).pipe(
        tap((response: any) => {
        (response.content as Emprendedores[]).forEach(emprendedores => {
          console.log(emprendedores.nomEmp);
        });
        }),
        map((response: any) => {
          (response.content as Emprendedores[]).map(emprendedores => {
            emprendedores.nomEmp = emprendedores.nomEmp.toUpperCase();
            return emprendedores;
          });
          return response;
          }),
          tap(response => {
            (response.content as Emprendedores[]).forEach(emprendedores => {
              console.log(emprendedores.nomEmp);
            });
            }),
      )
    }

    getEmprendedoresagm(): Observable<Emprendedoresagm>{
      return this.http.get(environment.miiguana.emprendedores).pipe(
        map((response) => response as Emprendedoresagm)
      )
    }
  
    getEmprendedor(id): Observable<Emprendedores>{
      return this.http.get<Emprendedores>(environment.miiguana.emprendedores+'/'+id).pipe(
        catchError( e => {
          this.router.navigate(['/estoy-aqui']);
          const Toast = Swal.mixin({
            // toast: true,
            // position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al Editar',
            text: 'Este emprendedor no existe en la base!',
          });
          return throwError(e);
        })
      )
    }

    crearEmprendedores(emprendedores: Emprendedores) : Observable<Emprendedores>{
      return this.http.post<Emprendedores>(environment.miiguana.crearempr, emprendedores,{headers: this.agregarAurhorizationHeader()}).pipe(
        catchError(e => {
          console.log(e.error.mensaje);
          const Toast = Swal.mixin({
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al Registrar nuevo Emprendedor',
            text: e.error.mensaje
            })
            return throwError(e);
        })
      )
    }

    updateEmprendedor(emprendedores: Emprendedores): Observable<Emprendedores>{
      return this.http.put<Emprendedores>(`${environment.miiguana.emprendedores}/${emprendedores.codEmp}`, emprendedores,{headers: this.agregarAurhorizationHeader()}).pipe(
        catchError(e => {
          console.log(e.error.mensaje);
          const Toast = Swal.mixin({
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al actualizar',
            text: e.error.mensaje
            })
            return throwError(e);
        })
      )
    }




    deleteEmprendedor(id: Number): Observable<Emprendedores>{
      return this.http.delete<Emprendedores>(`${environment.miiguana.emprendedores}/${id}`, {headers: this.agregarAurhorizationHeader()} ).pipe(
        catchError(e => {
          console.log(e.error.mensaje);
          const Toast = Swal.mixin({
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al Eliminar',
            text: e.error.mensaje
            })
            return throwError(e);
        })
      )
    }



    
    registrarusuario(registrar: Registrar) : Observable<Registrar>{
      return this.http.post<Registrar>(environment.miiguana.usuarios, registrar, {headers: this.agregarAurhorizationHeader()}).pipe(
        catchError(e => {
          console.log(e.error.mensaje);
          const Toast = Swal.mixin({
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al Registrar nuevo Usuario',
            text: e.error.mensaje
            })
            return throwError(e);
        })
      )
    }

    getUsuarios(page: number): Observable<any>{
      return this.http.get(environment.miiguana.usuarios+'/page/'+page,{headers: this.agregarAurhorizationHeader()}).pipe(
        tap((response: any) => {
        (response.content as Usuario[]).forEach(usuario => {
          console.log(usuario.nombre);
        });
        }),
        map((response: any) => {
          (response.content as Usuario[]).map(usuario => {
            usuario.nombre = usuario.nombre.toUpperCase();
            return usuario;
          });
          return response;
          }),
          tap(response => {
            (response.content as Usuario[]).forEach(usuario => {
              console.log(usuario.nombre);
            });
            }),
      )
    }


    getUsuariosagm(): Observable<Usuario>{
      return this.http.get(environment.miiguana.usuarios).pipe(
        map((response) => response as Usuario)
      )
    }

    
    deleteUsuario(id: Number): Observable<Usuario>{
      return this.http.delete<Usuario>(`${environment.miiguana.usuarios}/${id}`, {headers: this.agregarAurhorizationHeader()} ).pipe(
        catchError(e => {
          console.log(e.error.mensaje);
          const Toast = Swal.mixin({
            showConfirmButton: false,
            timer: 3000
          });
    
          Toast.fire({
            type: 'error',
            title: 'Error al Eliminar',
            text: e.error.mensaje
            })
            return throwError(e);
        })
      )
    }



    




  }