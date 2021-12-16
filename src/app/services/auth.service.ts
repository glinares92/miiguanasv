import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _usuario: Usuario;
  private _token: string;

  constructor( private http: HttpClient) { }

  public get usuario(): Usuario{
    if(this._usuario != null){
      this._usuario
    }else if(this._usuario == null && sessionStorage.getItem('usuario') != null ){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return  new Usuario();
  }

  public get token(): string{
    if(this._token != null){
      return this._token;
    }else if(this._token == null && sessionStorage.getItem('token') != null ){
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
    
  }

  login(usuario: Usuario):Observable<any> {
    const credenciales = btoa('miiguanasv' + ':' + '1234');
    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded', 
      'Authorization': 'Basic '+ credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    // console.log(params.toString());
    
    return this.http.post<any>(environment.miiguana.conectar, params.toString(), {headers: httpHeaders});
  }

  guardarUsuario(accesstoken: string): void{
    let payload = this.obtenerDatosToken(accesstoken);
    this._usuario = new Usuario();
    this._usuario.username = payload.username;
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.nombrenegocio = payload.nombrenegocio;
    this._usuario.telefono = payload.telefono;
    this._usuario.tipoemprendedor = payload.tipoemprendedor;

    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  guardarToken(accesstoken: string): void{
    this._token = accesstoken;
    sessionStorage.setItem('token',accesstoken);
  }


  obtenerDatosToken(accessToken:string):any{
    if(accessToken != null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }


  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token);
    // console.log(payload.user_name);
    
    if(payload != null && payload.user_name && payload.user_name.length>0){
      return true;
    }
    return false;
  }


  logouth():void{
    this._token =  null;
    this._usuario = null;
    sessionStorage.clear();
  }

  




}
