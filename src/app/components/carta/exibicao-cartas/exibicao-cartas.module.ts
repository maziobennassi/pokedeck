import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderModule } from '../../shared/loader/loader.module';
import { ExibicaoCartasComponent } from './exibicao-cartas.component';

@NgModule({
  declarations: [
    ExibicaoCartasComponent
  ],
  exports: [
    ExibicaoCartasComponent
  ],
  imports: [
    CommonModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [ExibicaoCartasComponent]
})
export class ExibicaoCartaModule { }
