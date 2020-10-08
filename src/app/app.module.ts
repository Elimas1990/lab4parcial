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
import { TablaActoresComponent } from './componenteparcial/actor/tabla-actores/tabla-actores.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TablaPaisesComponent } from './cparcial/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './cparcial/alta-actor/alta-actor.component';
import { PrincipalComponent } from './cparcial/principal/principal.component';
import { FormsModule } from '@angular/forms';

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
    ListadoComponent,
    TablaActoresComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    PrincipalComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
