import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-crearpizza',
  templateUrl: './crearpizza.component.html',
  styleUrls: ['./crearpizza.component.css']
})
export class CrearpizzaComponent implements OnInit {

  @Output() pizzaGenerada= new EventEmitter<any>()
  formEncuesta:FormGroup= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    peso:new FormControl('',[Validators.required,Validators.min(500),Validators.max(1000)]),
    precio:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required])
  })
  constructor(private http:MiservicioService) { }

  ngOnInit(): void {
  }

  guardarForm(){
    this.pizzaGenerada.emit(this.formEncuesta.getRawValue())
  
  }

}
