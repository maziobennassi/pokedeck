import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CartaModule } from '../carta/carta.module';
import { SharedModule } from '../shared/shared.module';
import { ListarDecksComponent } from './listar-decks/listar-decks.component';
import { ManterDecksComponent } from './manter-decks/manter-decks.component';
import { VisualizarDecksComponent } from './visualizar-decks/visualizar-decks.component';

@NgModule({
  declarations: [
    ListarDecksComponent,
    ManterDecksComponent,
    VisualizarDecksComponent
  ],
  exports: [
    ListarDecksComponent,
    ManterDecksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule,
    CartaModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    ListarDecksComponent,
    ManterDecksComponent
  ]
})
export class DeckModule { }
