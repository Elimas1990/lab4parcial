import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userlogueado: Observable<any>=this.authService.auth.user
  userlogin=false
  constructor(private authService:AuthService,
    private router:Router) {
    
    this.userlogueado.subscribe(x=>this.userlogin=true)
    console.log(this.userlogin)
   }

   desloguearse(){
     this.authService.logout()
     this.userlogin=false
     console.log(this.userlogin)
     this.router.navigate([''])
   }

  ngOnInit(): void {
    //this.userlogueado=localStorage.getItem('user')
  }

}
