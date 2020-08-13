import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizarDecksComponent } from './visualizar-decks.component';

const routes: Routes = [
  { path: 'visualizar-deck/:id' , component: VisualizarDecksComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizarDecksRoutingModule { }