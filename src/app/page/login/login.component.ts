
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
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
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  autocompletarUsuario(){
    this.email="admin@admin.com"
    this.pass="123456"
  }

  userLogueado={email :'',pass:''}
 
  loguearse(){
   
    try{
      const user= this.authService.login(this.email,this.pass)
      console.log(user)
      localStorage.setItem('user',this.email)
     if(user){
      this.router.navigate([''])
     }
    }
    catch(error){
      console.log(error);
    }
  
    /*
    this.db.obtenerUsuario(this.email).subscribe(a => {
    this.usuarioBuscado=a
    console.log(this.usuarioBuscado)
    if(this.email == a.usuario && this.pass == a.pass){
      localStorage.setItem('user',a.usuario)
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
