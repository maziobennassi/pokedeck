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
    LoaderModule
  ],
  providers: [],
  bootstrap: [ExibicaoCartasComponent]
})
export class ExibicaoCartaModule { }
