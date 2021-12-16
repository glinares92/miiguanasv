import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosRedEmprendedoresComponent } from './components/red-emprendedoressv/contactenos-red-emprendedores/contactenos-red-emprendedores.component';
import { LoginComponent } from './components/portal-iguana/login/login.component';
import { RegristrateComponent } from './components/portal-iguana/regristrate/regristrate.component';
import { InicioRedEmprendedorComponent } from './components/red-emprendedoressv/inicio-red-emprendedores/inicio-red-emprendedor.component';
import { DetalleEmprendedoresComponent } from './components/portal-iguana/detalle-emprendedores/detalle-emprendedores.component';
import { FormMttoCComponent } from './components/portal-iguana/form-mtto-c/form-mtto-c.component';
import { DondeEstoyComponent } from './components/portal-iguana/donde-estoy/donde-estoy.component';
import { FormMttoEComponent } from './components/portal-iguana/form-mtto-e/form-mtto-e.component';
import { DetalleUsuariosComponent } from './components/portal-iguana/detalle-usuarios/detalle-usuarios.component';
import { ListaArticuloComponent } from './components/portal-iguana/stripe/articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './components/portal-iguana/stripe/articulo/detalle-articulo.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';



const routes: Routes = [
  { path: 'redemprendedores', component: InicioRedEmprendedorComponent },
  { path: 'donacion', component: DonacionesComponent },
  { path: 'estoy-aqui', component: DondeEstoyComponent },
  { path: 'lista', component: ListaArticuloComponent },
  { path: 'detalle/:id', component: DetalleArticuloComponent },

  { path: 'detalle-emprendedores', component: DetalleEmprendedoresComponent },
  { path: 'detalle-emprendedores/page/:page', component: DetalleEmprendedoresComponent },
  { path: 'detalle-emprendedores/formulario-emprendedor', component: FormMttoCComponent },
  { path: 'detalle-emprendedores/formulario-emprendedor/:id', component: FormMttoCComponent },

  { path: 'detalle-usuario', component: DetalleUsuariosComponent },
  { path: 'detalle-usuario/page/:page', component: DetalleUsuariosComponent },
  { path: 'detalle-usuario/formulario-usuario', component: FormMttoEComponent },
  { path: 'detalle-usuario/formulario-usuario/:id', component: FormMttoEComponent },

  { path: 'red-emprendedores/contactanos', component: ContactenosRedEmprendedoresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrate', component: RegristrateComponent },
  { path: 'inicio', component: InicioComponent }, // Siempre debe ser penultimo
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }, // Siempre debe ser el ultimo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
