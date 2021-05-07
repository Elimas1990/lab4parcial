import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-rapartidordetalle',
  templateUrl: './rapartidordetalle.component.html',
  styleUrls: ['./rapartidordetalle.component.css']
})
export class RapartidordetalleComponent implements OnInit {

  listaRepartidores:any=[]
  repartidorseleccionado:any;
  constructor(private http:MiservicioService) { 
    http.repartidores.subscribe(x=>{
      this.listaRepartidores=x
      console.log(this.listaRepartidores)
    })
  }

  ngOnInit(): void {
  }
  selectRepartidor(i){
    this.repartidorseleccionado=i
  }
}
