import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManterDecksComponent } from './manter-decks.component';

const routes: Routes = [
  { path: 'cadastrar-deck' , component: ManterDecksComponent },
  { path: 'editar-deck/:id' , component: ManterDecksComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManterDecksRoutingModule { }