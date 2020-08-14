import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarDecksModule } from './components/deck/listar-decks/listar-decks.module';
import { LoaderModule } from './components/shared/loader/loader.module';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { ApiPokemonService } from './services/apipokemon.service';
import { DeckService } from './services/deck.service';
import { LoaderService } from './services/loader.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoaderModule,
    AppRoutingModule,
    ListarDecksModule
  ],
  providers: [
    ApiPokemonService,
    DeckService,
    LoaderService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }