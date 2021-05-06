import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit {

  @Output() paisSelect =new EventEmitter
  listaPaises:any=[]
  constructor(private paises:PaisesService) {
    paises.getPaises().subscribe(p=>{
      this.listaPaises=p
      console.log(this.listaPaises)
    })
   }

  ngOnInit(): void {
  }

  enviarPais(pais){
    this.paisSelect.emit(pais)
  }

}
