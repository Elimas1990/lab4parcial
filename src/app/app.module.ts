import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaisesBanderaComponent } from './componentes/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './componentes/regiones/regiones.component';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './componenteparcial/busqueda/busqueda.component';
import { DatallePeliculaComponent } from './componenteparcial/datalle-pelicula/datalle-pelicula.component';
import { TablaPeliculaComponent } from './componenteparcial/tabla-pelicula/tabla-pelicula.component';
import { BienvenidoComponent } from './componenteparcial/bienvenido/bienvenido.component';
import { AltaComponent } from './componenteparcial/peliculas/alta/alta.component';
import { ListadoComponent } from './componenteparcial/actor/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaisesBanderaComponent,
    RegionesComponent,
    BusquedaComponent,
    DatallePeliculaComponent,
    TablaPeliculaComponent,
    BienvenidoComponent,
    AltaComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
