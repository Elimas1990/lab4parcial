import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() paises:any;
  @Output() emitirpais: EventEmitter <any> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cargaPais(x){
    this.emitirpais.emit(x);
  }

}
