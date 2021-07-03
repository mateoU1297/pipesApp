import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombre: string = 'MaTeo cAStro HeNAO';
  fecha: Date = new Date();
  
}
