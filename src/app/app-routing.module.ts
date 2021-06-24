import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { AltarepartidoresComponent } from './page/altarepartidores/altarepartidores.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { PedidoComponent } from './page/pedido/pedido.component';
import { PizzasComponent } from './page/pizzas/pizzas.component';
import { RapartidordetalleComponent } from './page/rapartidordetalle/rapartidordetalle.component';

const routes: Routes = [
  {path:'',component:BienvenidoComponent},
  {path:'login',component:LoginComponent},
  {path:'altarepartidores',component:AltarepartidoresComponent,canActivate:[LoginGuard]},
  {path:'detallerepartidor',component:RapartidordetalleComponent,canActivate:[LoginGuard]},
  {path:'pizzas',component:PizzasComponent,canActivate:[LoginGuard]},
  {path:'pedido',component:PedidoComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
