import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarDecksComponent } from './listar-decks.component';

const routes: Routes = [
  { path: '' , component: ListarDecksComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarDecksRoutingModule { }