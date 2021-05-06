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
  usuarios:Observable<any[]>

  constructor(private http:HttpClient,
    private dbfire:AngularFirestore,
    private router:Router) { 
      this.data=dbfire.collection<any>('/usuarios');
      this.usuarios=this.data.valueChanges('/usuarios')
  }

  getApiData(){
    return this.http.get('https://api.github.com/users/octaviovillegas')
  }
  guardarUsuario(datos:any):any{
    return this.data.add({...datos});

  }
  obtenerUsuario(usr){
    return this.usuarios.pipe(
      map(txs => txs.find(txn => txn.usuario === usr))
    );
    
  }



  

}