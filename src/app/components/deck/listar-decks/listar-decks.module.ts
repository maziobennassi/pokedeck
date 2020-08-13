import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { ListarDecksRoutingModule } from './listar-decks-routing.module';
import { ListarDecksComponent } from './listar-decks.component';

@NgModule({
  declarations: [
    ListarDecksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    ExibicaoCartaModule,
    LoaderModule,
    ModalConfirmacaoModule,
    ListarDecksRoutingModule
  ],
  providers: [],
  bootstrap: [
    ListarDecksComponent
  ]
})
export class ListarDecksModule { }
