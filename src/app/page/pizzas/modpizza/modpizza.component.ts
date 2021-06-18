import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modpizza',
  templateUrl: './modpizza.component.html',
  styleUrls: ['./modpizza.component.css']
})
export class ModpizzaComponent implements OnInit {

  @Input() pizzaAModificar
  @Output() pizzaMod= new EventEmitter<any>()
  formEncuesta:FormGroup= new FormGroup({
    peso:new FormControl('',[Validators.required,Validators.min(500),Validators.max(1000)]),
    precio:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  guardarForm(){
    let form=this.formEncuesta.getRawValue()
    form.id=this.pizzaAModificar.eventId
    this.pizzaMod.emit(form)
    this.formEncuesta.reset()
    this.pizzaAModificar=null
    //this.pizzaGenerada.emit(this.formEncuesta.getRawValue())
  
  }
}
