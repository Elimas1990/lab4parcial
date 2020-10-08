import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  @Input() pais:any;
  constructor() { }

  ngOnInit(): void {
  }

}
