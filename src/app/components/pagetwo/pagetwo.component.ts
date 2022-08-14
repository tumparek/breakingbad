import { Component, Input } from '@angular/core';
import { Personaje } from '../../interface/interface';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent  {



  @Input( ) personaje!:Personaje;

  constructor() { }

  

}
