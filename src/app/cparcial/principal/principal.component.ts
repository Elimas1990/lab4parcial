import { Component, OnInit } from '@angular/core';
import {MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  listado =[];
  paisElegido:any;
  constructor(public miservicio:MiservicioService) { }

  ngOnInit(): void {
    this.miservicio.obtenerPaises().subscribe(
      (paises:any) => {
        this.listado = paises
        console.log(paises);
      });

  }
  cargaPais(pais){
    this.paisElegido=pais;
  }

}
