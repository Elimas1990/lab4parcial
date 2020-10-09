import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoComponent} from './cparcial/actor/listado/listado.component';
import { BusquedaComponent } from './componenteparcial/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { PrincipalComponent } from './cparcial/principal/principal.component';

const routes: Routes = [
  //{path:'',component:HomeComponent}
  {path:'',component:PrincipalComponent},
  {path:'listado',component:ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
