import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from 'src/app/interceptors/loader-interceptor.service';
import { LoaderService } from 'src/app/services/loader.service';

import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }