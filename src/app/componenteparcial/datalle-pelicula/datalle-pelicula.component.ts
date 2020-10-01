import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalle-pelicula',
  templateUrl: './datalle-pelicula.component.html',
  styleUrls: ['./datalle-pelicula.component.css']
})
export class DatallePeliculaComponent implements OnInit {

  @Input() peli:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
