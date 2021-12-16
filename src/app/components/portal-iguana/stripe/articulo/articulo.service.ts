import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/model/articulo';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})} 

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor( private httpClient: HttpClient) { }

  public lista(): Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(environment.miiguana.lista, cabecera);
  }

  public detalle(id: number): Observable<Articulo>{
    return this.httpClient.get<Articulo>(environment.miiguana.detalle + `${id}`, cabecera);
  }


}
