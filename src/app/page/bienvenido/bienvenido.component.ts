import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  info:any=[]
  constructor(private api:MiservicioService) { 
    api.getApiData().subscribe(data =>{
      this.info=data
      console.log(this.info)
    })
  }

  ngOnInit(): void {
  }

}
