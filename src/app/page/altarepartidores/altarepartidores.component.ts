import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-altarepartidores',
  templateUrl: './altarepartidores.component.html',
  styleUrls: ['./altarepartidores.component.css']
})
export class AltarepartidoresComponent implements OnInit {



  errorUsuario=false;
  listaJuegos:any[]=[]
  seEnvioFormulario=false;


  formEncuesta:FormGroup= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    edad:new FormControl('',[Validators.required,Validators.min(18),Validators.max(99)]),
    dni:new FormControl('',[Validators.required,Validators.max(9999999999)]),
    cdtransporte:new FormControl('',[Validators.required]),
    pais:new FormControl('',[Validators.required]),
    upropia:new FormControl(''),
  })
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  guardarForm(){
    console.log(this.formEncuesta)
  }
  paisSelect(pais){
    this.formEncuesta.controls.pais.setValue(pais)
  }

}
