import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculas:any;
  @Output() selectPeli:EventEmitter<any>= new EventEmitter;
  idpeli:any;

  constructor() { }

  ngOnInit(): void {
  }
  verDetalle(id){
    this.selectPeli.emit(id);
  }
}
