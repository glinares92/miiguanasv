import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentIntentDto } from 'src/app/model/payment-intent-dto';


@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() id;
  @Input() nombre;
  @Input() descripcion;
  @Input() precio;
  error: any;

  elements: Elements;
  card: StripeElement;

  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  constructor(
    public modalService: NgbModal,
    private stripeService: StripeService,
    private paymentService: PaymentService,
    private router: Router
    ) { }

    public stripeForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  ngOnInit() {
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeForm.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          const paymentIntentDto: PaymentIntentDto = {
            token: result.token.id,
            amount: this.precio,
            currency: 'USD',
            description: this.descripcion

                        
          };
          console.log(this.paymentService);
          
          this.paymentService.pagar(paymentIntentDto).subscribe(
            data => {
              this.abrirModal(data[`id`], this.nombre, data[`description`], data[`amount`]);
              this.router.navigate(['/lista']);
            }
          );
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error.message;
        }
      });
  }

  abrirModal(id: string, nombre: string, descripcion: string, precio: number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.nombre = nombre;
    modalRef.componentInstance.descripcion = descripcion;
    modalRef.componentInstance.precio = precio;
  }

}