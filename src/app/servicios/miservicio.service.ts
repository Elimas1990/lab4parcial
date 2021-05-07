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
  usuarios:Observable<any[]>
  repartidores:Observable<any[]>
  constructor(private http:HttpClient,
    private dbfire:AngularFirestore,
    private router:Router) { 
      this.data=dbfire.collection<any>('/usuarios');
      this.dataRepartidor=dbfire.collection<any>('/repartidores');
      this.usuarios=this.data.valueChanges('/usuarios')
      this.repartidores=this.dataRepartidor.valueChanges('/repartidores')
  }

  getApiData(){
    return this.http.get('https://api.github.com/users/octaviovillegas')
  }
  guardarUsuario(datos:any):any{
    return this.data.add({...datos});

  }
  guardarRepartidor(datos:any):any{
    return this.data.add({...datos});

  }
  obtenerUsuario(usr){
    return this.usuarios.pipe(
      map(txs => txs.find(txn => txn.usuario === usr))
    );
    
  }



  

}