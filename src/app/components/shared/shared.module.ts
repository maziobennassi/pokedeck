import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor.service';
import { LoaderService } from 'src/app/services/loader.service';

import { LoaderComponent } from './loader/loader.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoaderComponent,
    ModalConfirmacaoComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [LoaderComponent]
})
export class SharedModule { }