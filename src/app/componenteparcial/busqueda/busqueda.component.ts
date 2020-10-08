import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../servicios/peliculas.service';
import { ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listado=[];
  listadoActores=[];
  peliSelect:any;

  constructor(public peliculasservice:PeliculasService,
    public actoresservice:ActoresService) { }

   ngOnInit(): void {
    this.peliculasservice.obtenerPeliculas().subscribe((peliculas:any) => {

        this.listado = peliculas;
      });
      this.actoresservice.obtenerActores().subscribe((actores:any) => {

        this.listadoActores = actores;
      });
  }
  peliSeleccionada(id){
    this.peliSelect=id;
  }


}
