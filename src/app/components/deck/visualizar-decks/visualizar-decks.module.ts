import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { VisualizarDecksRoutingModule } from './visualizar-decks-routing.module';
import { VisualizarDecksComponent } from './visualizar-decks.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    VisualizarDecksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    ExibicaoCartaModule,
    LoaderModule,
    ModalConfirmacaoModule,
    VisualizarDecksRoutingModule
  ],
  providers: [],
  bootstrap: [
    VisualizarDecksComponent
  ]
})
export class VisualizarDecksModule { }
