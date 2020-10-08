import { Injectable } from '@angular/core';3
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private url= environment.urlActores;
  constructor(private http:HttpClient) { }
  public obtenerActores(){
    return this.http.get(this.url);
  }
}
