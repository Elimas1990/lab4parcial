import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

  @Input() region:string;
  @Input() paises:any;
  constructor() { }

  ngOnInit(): void {
    //this.paises.filter(item => item.region === this.region);
    //console.log(this.paises.filter(item => item.region === this.region));
  }
  filtrarRegion(reg){
    if(reg==this.region){
      return true;
    }else{
      return false;
    }
  }
  filterFunction(your_collection): any[] {  
      return this.paises.filter(i => i.region === this.region);
  }
}
