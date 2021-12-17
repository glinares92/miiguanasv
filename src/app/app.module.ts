import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';
import { RedproveedorService } from './services/redproveedor.service';
import { MiIguanaService } from './services/miiguanasv.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxStripeModule } from 'ngx-stripe';
import { ToastrModule } from 'ngx-toastr';

import { Material } from './app-material';
import { HttpService } from './services/http.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BannerpriComponent } from './components/shared/bannerpri/bannerpri.component';
import { LoginComponent } from './components/portal-iguana/login/login.component';
import { RegristrateComponent } from './components/portal-iguana/regristrate/regristrate.component';
import { EmprendedorigComponent } from './components/red-emprendedoressv/inicio-red-emprendedores/emprededor/emprendedorig.component';
import { ContactenosRedEmprendedoresComponent } from './components/red-emprendedoressv/contactenos-red-emprendedores/contactenos-red-emprendedores.component';
import { EmprendedorTarjetaComponent } from './components/red-emprendedoressv/inicio-red-emprendedores/emprendedor-tarjeta/emprendedor-tarjeta.component';
import { InicioRedEmprendedorComponent } from './components/red-emprendedoressv/inicio-red-emprendedores/inicio-red-emprendedor.component';
import { DetalleEmprendedoresComponent } from './components/portal-iguana/detalle-emprendedores/detalle-emprendedores.component';
import { AuthService } from './services/auth.service';
import { FormMttoCComponent } from './components/portal-iguana/form-mtto-c/form-mtto-c.component';
import { DondeEstoyComponent } from './components/portal-iguana/donde-estoy/donde-estoy.component';
import { FormMttoEComponent } from './components/portal-iguana/form-mtto-e/form-mtto-e.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';
import { DetalleUsuariosComponent } from './components/portal-iguana/detalle-usuarios/detalle-usuarios.component';
import { Paginator2Component } from './components/shared/paginator2/paginator2.component';
import { ChatModule } from './chat/chat.module';
import { EnvioMailComponent } from './components/envio-mail/envio-mail.component';
import { ModalComponent } from './components/portal-iguana/stripe/modal/modal.component';
import { PaymentComponent } from './components/portal-iguana/stripe/payment/payment.component';
import { ListaArticuloComponent } from './components/portal-iguana/stripe/articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './components/portal-iguana/stripe/articulo/detalle-articulo.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    InicioRedEmprendedorComponent,
    EmprendedorigComponent,
    EmprendedorTarjetaComponent,
    ContactenosRedEmprendedoresComponent,
    BannerpriComponent,
    LoginComponent,
    RegristrateComponent,
    DetalleEmprendedoresComponent,
    FormMttoCComponent,
    DondeEstoyComponent,
    FormMttoEComponent,
    PaginatorComponent,
    DetalleUsuariosComponent,
    Paginator2Component,
    EnvioMailComponent,
    ModalComponent,
    PaymentComponent,
    ListaArticuloComponent,
    DetalleArticuloComponent,
    DonacionesComponent,
    OfertasComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    Material,
    NgxStripeModule.forRoot('pk_test_51K3t74DPccycy36TkGmda4ya2Wc5whDuGhLjpI2yJFLgRdDdKO8BlvqQVNB5XzZuOZw1bdirGaIKPbgV6iDGHjul00gwWhPWvE'),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_8mj5gVWjcWGQGfDTGCQczDxZLcSiZZ0'
    }),
    AgmDirectionModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ScrollToModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    ChatModule,
    NgbModalModule
  ],

  entryComponents: [ModalComponent],

  providers: [
    RedproveedorService, MiIguanaService, AuthService, HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
