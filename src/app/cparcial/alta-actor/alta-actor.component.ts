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
    console.log(this.actor);
    this.db.collection('resultJuegos').add({
      nombre:this.actor.nombre,
      apellido:this.actor.apellido,
      nacionalidad:this.actor.nombre,
      fechaNacimiento:firestore.Timestamp.fromDate(this.actor.fechaNacimeinto)
    })
  }

}
