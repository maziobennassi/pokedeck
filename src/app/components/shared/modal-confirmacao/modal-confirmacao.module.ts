import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

import { ModalConfirmacaoComponent } from './modal-confirmacao.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ModalConfirmacaoComponent]
})
export class ModalConfirmacaoModule { }