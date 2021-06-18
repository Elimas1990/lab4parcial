import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { AltarepartidoresComponent } from './page/altarepartidores/altarepartidores.component';
import { TablapaisesComponent } from './page/altarepartidores/tablapaises/tablapaises.component';
import { RapartidordetalleComponent } from './page/rapartidordetalle/rapartidordetalle.component';
import { DatosComponent } from './page/rapartidordetalle/datos/datos.component';
import { PaisComponent } from './page/rapartidordetalle/pais/pais.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PizzasComponent } from './page/pizzas/pizzas.component';
import { CrearpizzaComponent } from './page/pizzas/crearpizza/crearpizza.component';
import { ModpizzaComponent } from './page/pizzas/modpizza/modpizza.component';
import { BorrarpizzaComponent } from './page/pizzas/borrarpizza/borrarpizza.component';
import { MostrarpizzaComponent } from './page/pizzas/mostrarpizza/mostrarpizza.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltarepartidoresComponent,
    TablapaisesComponent,
    RapartidordetalleComponent,
    DatosComponent,
    PaisComponent,
    NavbarComponent,
    PizzasComponent,
    CrearpizzaComponent,
    ModpizzaComponent,
    BorrarpizzaComponent,
    MostrarpizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
