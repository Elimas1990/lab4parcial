import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listapizzas',
  templateUrl: './listapizzas.component.html',
  styleUrls: ['./listapizzas.component.css']
})
export class ListapizzasComponent implements OnInit {

  @Input() listaPizzas
  @Output() pizzaSelect=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  selectPizza(pizza){
    this.pizzaSelect.emit(pizza)
  }
}
