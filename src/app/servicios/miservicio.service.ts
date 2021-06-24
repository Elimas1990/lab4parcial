import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter,map,catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  

  usuariosHard

  data:AngularFirestoreCollection<any>;
  dataRepartidor:AngularFirestoreCollection<any>;
  dataPizzas:AngularFirestoreCollection<any>;
  usuarios:Observable<any[]>
  repartidores:Observable<any[]>
  pizzas:Observable<any[]>
  constructor(private http:HttpClient,
    private dbfire:AngularFirestore,
    private router:Router) { 
      this.data=dbfire.collection<any>('/usuarios');
      this.dataRepartidor=dbfire.collection<any>('/repartidores');
      this.usuarios=this.data.valueChanges('/usuarios')
      this.dataPizzas=dbfire.collection<any>('/pizzas');
      this.pizzas=this.dataPizzas.valueChanges({ idField: 'eventId' })
      this.repartidores=this.dataRepartidor.valueChanges({ idField: 'eventId' })
  }

  getApiData(){
    return this.http.get('https://api.github.com/users/esteban1990')
  }
  guardarUsuario(datos:any):any{
    return this.data.add({...datos});

  }
  guardarRepartidor(datos:any):any{
    return this.dataRepartidor.add({...datos});

  }
  guardarPizza(datos:any):any{
    return this.dataPizzas.add({...datos});

  }
  obtenerUsuario(usr){
    return this.usuarios.pipe(
      map(txs => txs.find(txn => txn.usuario === usr))
    );
    
  }

  async eliminarPizza(id){
    return await this.dbfire.collection('/pizzas').doc(id).delete();
  }
  async modificarPizza(pizza){
    let id=pizza.id
    delete pizza.id
    return await this.dbfire.collection('/pizzas').doc(id).update(pizza);
  }



  

}