import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  listaPizzas=[]
  pizzaAModificar
  constructor(private miService:MiservicioService) {
    
    miService.pizzas.subscribe(x=>{
      this.listaPizzas=x
      console.log(this.listaPizzas)
    })
   }

  ngOnInit(): void {
  }
  mostrarCol=false

  pizzaMod(pizza){
    this.mostrarCol=true
    this.pizzaAModificar=pizza
    //this.miService.eliminarPizza(pizza.eventId)
  }
  pizzaBorrar(pizza){
    
    this.miService.eliminarPizza(pizza.eventId)
  }
  guardarPizza(pizza){
    this.miService.guardarPizza(pizza)
  }

  guardarCambioPizza(pizza){
    this.mostrarCol=false
    this.miService.modificarPizza(pizza)
  }

}
