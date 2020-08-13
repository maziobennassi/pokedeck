import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { ManterDecksRoutingModule } from './manter-decks-routing.module';
import { ManterDecksComponent } from './manter-decks.component';

@NgModule({
  declarations: [
    ManterDecksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule,
    ExibicaoCartaModule,
    LoaderModule,
    ModalConfirmacaoModule,
    ManterDecksRoutingModule
  ],
  providers: [],
  bootstrap: [
    ManterDecksComponent
  ]
})
export class ManterDecksModule { }
