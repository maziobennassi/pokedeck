import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarDecksComponent } from './components/deck/listar-decks/listar-decks.component';
import { ManterDecksComponent } from './components/deck/manter-decks/manter-decks.component';
import { VisualizarDecksComponent } from './components/deck/visualizar-decks/visualizar-decks.component';

const routes: Routes = [
  { path: '',  redirectTo: 'decks', pathMatch: 'full' },
  { path: 'decks' , component: ListarDecksComponent },
  { path: 'cadastrar-deck' , component: ManterDecksComponent },
  { path: 'editar-deck/:id' , component: ManterDecksComponent },
  { path: 'visualizar-deck/:id' , component: VisualizarDecksComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }