import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { AltarepartidoresComponent } from './page/altarepartidores/altarepartidores.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'',component:BienvenidoComponent},
  {path:'login',component:LoginComponent},
  {path:'altarepartidores',component:AltarepartidoresComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
