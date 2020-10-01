import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../servicios/peliculas.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listado=[];
  peliSelect:any;

  constructor(public peliculasservice:PeliculasService) { }

   ngOnInit(): void {
    this.peliculasservice.obtenerPeliculas().subscribe((peliculas:any) => {

        this.listado = peliculas;
      });
  }
  peliSeleccionada(id){
    this.peliSelect=id;
  }


}
