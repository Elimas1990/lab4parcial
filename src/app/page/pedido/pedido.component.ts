import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  listaRepartidores:any=[]
  listaPizzas:any=[]
  repartidorseleccionado:any;
  listaPedido:any=[]
  limite
  constructor(private http:MiservicioService) { 
    http.repartidores.subscribe(x=>{
      this.listaRepartidores=x
      console.log(this.listaRepartidores)
    })
    http.pizzas.subscribe(x=>{
      this.listaPizzas=x
      console.log(this.listaPizzas)
    })
  }
  ngOnInit(): void {
  }

  repartidorSelect(repartidor){
    this.repartidorseleccionado=repartidor
    this.limite=null
    this.listaPedido=[]
  }
  pizzaSelect(pizza){
    if(this.listaPedido.length < this.repartidorseleccionado.cdtransporte)
    { this.listaPedido.push(pizza) }
    else{
      this.limite="Ya alcanzo el límite"
    }
    
   
  }

}
