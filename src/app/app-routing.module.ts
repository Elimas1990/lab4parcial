import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './componenteparcial/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { PrincipalComponent } from './cparcial/principal/principal.component';

const routes: Routes = [
  //{path:'',component:HomeComponent}
  {path:'',component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
