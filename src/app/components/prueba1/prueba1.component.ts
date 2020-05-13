import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {
  @Input() miNombre;
  @Input() contador;

  constructor() { }

  ngOnInit(): void {
  }

}
