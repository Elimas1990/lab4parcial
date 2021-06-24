import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listarepartidores',
  templateUrl: './listarepartidores.component.html',
  styleUrls: ['./listarepartidores.component.css']
})
export class ListarepartidoresComponent implements OnInit {

  @Input() listaRepartidores
  @Output() repartidorSelect=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  selectRepartidor(repartido){
    this.repartidorSelect.emit(repartido)
  }

}
