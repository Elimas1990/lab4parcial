import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private url= environment.urlPaises;
  constructor(private http:HttpClient) { }
  public obtenerPaises(){
    return this.http.get(this.url);
  }
}
