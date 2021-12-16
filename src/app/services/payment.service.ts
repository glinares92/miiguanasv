import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentIntentDto } from '../model/payment-intent-dto';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private httpClient: HttpClient) { }

  public pagar(paymentIntentDto: PaymentIntentDto): Observable<string> {
    return this.httpClient.post<string>(environment.miiguana.stripePagar, paymentIntentDto, cabecera);
  }

  public confirmar(id: string): Observable<string>{
    return this.httpClient.post<string>(environment.miiguana.stripeConfirm + `${id}`, {}, cabecera);
  }

  public cancelar(id: string): Observable<string>{
    return this.httpClient.post<string>(environment.miiguana.stripeCancel + `${id}`, {}, cabecera);
  }


}
