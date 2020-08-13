import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExibicaoCartasComponent } from '../carta/exibicao-cartas/exibicao-cartas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExibicaoCartasComponent
  ],
  exports: [
    ExibicaoCartasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ExibicaoCartasComponent]
})
export class CartaModule { }
