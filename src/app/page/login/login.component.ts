
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioBuscado:any;

  email:string;
  pass:string;
  constructor(private db:MiservicioService,
    private router:Router) { }

  ngOnInit(): void {
  }

  autocompletarUsuario(){
    this.email="admin@admin.com"
    this.pass="123456"
  }

  loguearse(){
   
    this.db.obtenerUsuario(this.email).subscribe(a => {
    this.usuarioBuscado=a
    console.log(this.usuarioBuscado)
    if(this.email == a.usuario && this.pass == a.pass){
      localStorage.setItem('user',a.usuario)
      console.log(localStorage.getItem('user'))
      this.router.navigate([''])
    }
    })
    
    /*this.db.guardarUsuario({
      usuario:'carlos',
      pass:'boca',
      perfil:'master'
    })
    this.db.usuarios.subscribe(u => {
      console.log(u)
    })*/
  }
}
