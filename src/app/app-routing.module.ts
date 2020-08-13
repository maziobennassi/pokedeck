import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: 'decks', pathMatch: 'full' },
  {
    path: 'decks',
    loadChildren: () =>
          import('./components/deck/listar-decks/listar-decks.module').then(m => m.ListarDecksModule)
  },
  {
    path: 'cadastrar-deck',
    loadChildren: () =>
          import('./components/deck/manter-decks/manter-decks.module').then(m => m.ManterDecksModule)
  },
  {
    path: 'editar-deck/:id',
    loadChildren: () =>
          import('./components/deck/manter-decks/manter-decks.module').then(m => m.ManterDecksModule)
  },
  {
    path: 'visualizar-deck/:id',
    loadChildren: () =>
          import('./components/deck/visualizar-decks/visualizar-decks.module').then(m => m.VisualizarDecksModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }