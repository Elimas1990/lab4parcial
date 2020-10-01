import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  @Input() regiones:any;
  @Output() emitirregion: EventEmitter <any> =new EventEmitter();
 // result = [];

  constructor() {
    
    
  }

  ngOnInit(): void {
    //this.result = Array.from(new Set(this.regiones.map(x => x.region)));
    //console.log(this.regiones.region);
  }
  selectRegion(reg){
    this.emitirregion.emit(reg);
  }


}
