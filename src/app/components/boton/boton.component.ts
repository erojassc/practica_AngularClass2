import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Output() aumentarConteo: EventEmitter<any>;
  @Output() disminuirConteo: EventEmitter<any>;

  constructor() { 
    this.aumentarConteo = new EventEmitter<any>();
    this.disminuirConteo= new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  sumarClick(){
    this.aumentarConteo.emit();
  }

  restarClick(){
    this.disminuirConteo.emit();
  }
}
