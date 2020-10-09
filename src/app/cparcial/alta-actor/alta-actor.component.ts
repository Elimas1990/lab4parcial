import { sfExtensionData } from '@angular/compiler-cli/src/ngtsc/shims';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import {Actor} from '../../actor';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  actor = new Actor;
  @Input() pais:any;
  constructor(private db:AngularFirestore) { 
  }

  ngOnInit(): void {
  }
  guardarActor(){
    this.actor.nacionalidad=this.pais;
    this.db.collection('actores').add({
      nombre:this.actor.nombre,
      apellido:this.actor.apellido,
      nacionalidad:this.actor.nacionalidad,
      domicilio:this.actor.domicilio,
      fechaNacimiento:this.actor.fechaNacimeinto,
      foto:this.actor.foto,
      sexo:this.actor.sexo
    })
  }

}
