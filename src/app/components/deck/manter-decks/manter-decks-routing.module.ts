import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManterDecksComponent } from './manter-decks.component';

const routes: Routes = [
  { path: '' , component: ManterDecksComponent },
  { path: ':id' , component: ManterDecksComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManterDecksRoutingModule { }