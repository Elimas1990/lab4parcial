import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './componenteparcial/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  //{path:'',component:HomeComponent}
  {path:'',component:BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
