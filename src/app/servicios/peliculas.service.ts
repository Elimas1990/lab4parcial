import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url= environment.urlPeliculas;
  constructor(private http:HttpClient) { }
  
  public obtenerPeliculas(){
    return this.http.get(this.url);
  }
}
