import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  
  constructor(private http:HttpClient) { }

  getAllPaises(){
    return this.http.get(environment.urlPaises)
  }

}