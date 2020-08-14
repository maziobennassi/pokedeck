import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { ManterDecksRoutingModule } from './manter-decks-routing.module';
import { ManterDecksComponent } from './manter-decks.component';

describe('ManterDecksComponent', () => {
  let component: ManterDecksComponent;
  let fixture: ComponentFixture<ManterDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManterDecksComponent],
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientTestingModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RouterModule,
        ExibicaoCartaModule,
        LoaderModule,
        ModalConfirmacaoModule,
        ManterDecksRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
