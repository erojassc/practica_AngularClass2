import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public miNombre = 'Erick';
  public contador = 0;

  title = 'practica2';

  contar(){
    this.contador++;
  }
  restar(){
    if(this.contador > 0){
      this.contador--;
    }
  }
}
