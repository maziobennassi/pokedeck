import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { VisualizarDecksRoutingModule } from './visualizar-decks-routing.module';
import { VisualizarDecksComponent } from './visualizar-decks.component';

describe('VisualizarDecksComponent', () => {
  let component: VisualizarDecksComponent;
  let fixture: ComponentFixture<VisualizarDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarDecksComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        ExibicaoCartaModule,
        LoaderModule,
        ModalConfirmacaoModule,
        VisualizarDecksRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
