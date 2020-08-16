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
import { CartaMock } from 'src/test/mocks/carta-mock';
import { MatCardModule } from '@angular/material/card';

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
        MatCardModule,
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
    component.tipos = CartaMock.retornarTipos();
    component.tiposEnergia = CartaMock.retornarTipos();
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('método quantidadeCartasPorSupertype deve retornar a quantidade de cartas com o supertype Pokémon', () => {
    const spy = jest.spyOn(component, 'quantidadeCartasPorSupertype');

    expect(component.quantidadeCartasPorSupertype("Pokémon")).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('método quantidadeCartasPorSupertype deve retornar a quantidade de cartas com o supertype Trainer', () => {
    const spy = jest.spyOn(component, 'quantidadeCartasPorSupertype');
    
    expect(component.quantidadeCartasPorSupertype("Trainer")).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('método quantidadeCartasPorSupertype deve retornar a quantidade de cartas com o supertype Trainer', () => {
    const spy = jest.spyOn(component, 'quantidadeCartasPorSupertype');

    expect(component.quantidadeCartasPorSupertype("Energy")).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('método retornarCaminhoImagem deve retornar o caminho da imagem da energia informada', () => {
    const tipoEnergia = "Fire";
    const spy = jest.spyOn(component, 'retornarCaminhoImagem');

    expect(component.retornarCaminhoImagem(tipoEnergia)).toEqual(`../../.../../../../assets/images/${tipoEnergia.toLowerCase()}.png`);
    expect(spy).toHaveBeenCalled();
  });
});
