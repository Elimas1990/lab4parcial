import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mostrarpizza',
  templateUrl: './mostrarpizza.component.html',
  styleUrls: ['./mostrarpizza.component.css']
})
export class MostrarpizzaComponent implements OnInit {

  @Input() listaPizzas
  @Output() pizzaBorrar=new EventEmitter<any>()
  @Output() pizzaMod=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  borrarPizza(pizza){
    this.pizzaBorrar.emit(pizza)
  }
  modificarPizza(pizza){
    this.pizzaMod.emit(pizza)
  }

}
