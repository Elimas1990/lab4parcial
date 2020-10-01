import { Component, OnInit } from '@angular/core';
import {MiservicioService } from '../../servicios/miservicio.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listado =[];
  regionOpc:string;

  constructor(private miservicio:MiservicioService) { }

  ngOnInit(): void {
    this.miservicio.obtenerPaises().subscribe(
      (paises:any) => {
        this.listado = paises
      });
  }
  eligioRegion(region){
    this.regionOpc=region;
    console.log(this.regionOpc);
  }

}
