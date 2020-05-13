import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';
import { BotonComponent } from './components/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
