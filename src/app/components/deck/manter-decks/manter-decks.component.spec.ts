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
import { DeckMock } from 'src/test/mocks/deck-mock';
import { Carta } from 'src/app/models/carta';
import { CartaMock } from 'src/test/mocks/carta-mock';
import { Deck } from 'src/app/models/deck';

describe('ManterDecksComponent', () => {
  let component: ManterDecksComponent;
  let fixture: ComponentFixture<ManterDecksComponent>;
  const cartas: Carta[] = CartaMock.retornarCartas();
  const carta: Carta = CartaMock.retornarCarta("43", "Teste", "Teste", ["Teste"], 1);
  const cartaQuantidade1: Carta = CartaMock.retornarCarta("36", "Teste 1", "Teste", ["Teste"], 1);
  const cartaQuantidade2: Carta = CartaMock.retornarCarta("34", "Teste 2", "Teste", ["Teste"], 2);
  const cartaQuantidade4: Carta = CartaMock.retornarCarta("65", "Teste 4", "Teste", ["Teste"], 2);
  const cartasQuantidadeMaxima = [carta, carta, carta, carta];
  const cartasQuantidadeTotalDeck = CartaMock.retornarCartasQuantidadeTotalDeck();
  const deck: Deck = new Deck();

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

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('método adicionarCarta deve inserir uma carta no deck', () => {
    const spy = jest.spyOn(component, 'adicionarCarta');
    const quantidade = component.deck.cartas.length;    
    component.adicionarCarta(carta);

    expect(component.deck.cartas.length).toEqual(quantidade + 1);
    expect(spy).toHaveBeenCalled();
  });

  it('método adicionarCarta não deve inserir uma carta caso já existam 4 com o mesmo nome', () => {
    const spy = jest.spyOn(component, 'adicionarCarta');
    component.deck.cartas = cartasQuantidadeMaxima;
    const quantidade = component.deck.cartas.length;    
    component.adicionarCarta(carta);

    expect(component.deck.cartas.length).toEqual(quantidade);
    expect(spy).toHaveBeenCalled();
  });

  it('método adicionarCarta não deve inserir uma carta caso já existam 60 cartas no deck', () => {
    const spy = jest.spyOn(component, 'adicionarCarta');
    component.deck.cartas = cartasQuantidadeTotalDeck;
    const quantidade = component.deck.cartas.length;    
    component.adicionarCarta(carta);

    expect(component.deck.cartas.length).toEqual(quantidade);
    expect(spy).toHaveBeenCalled();
  });

  it('método adicionarCarta deve aumentar a quantidade da carta caso ela já exista no deck', () => {
    const spy = jest.spyOn(component, 'adicionarCarta');
    component.deck.cartas = [carta];
    const quantidade = component.deck.cartas[0].quantidade;     
    component.adicionarCarta(carta);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade + 1);
    expect(spy).toHaveBeenCalled();
  });

  it('método proximaPagina deve avançar uma pagina', () => {
    const spy = jest.spyOn(component, 'proximaPagina');
    component.proximaPagina();

    expect(component.pagina).toEqual(2);
    expect(spy).toHaveBeenCalled();
  });

  it('método proximaPagina deve retroceder uma pagina', () => {
    component.pagina = 2;
    const spy = jest.spyOn(component, 'paginaAnterior');
    component.paginaAnterior();

    expect(component.pagina).toEqual(1);
    expect(spy).toHaveBeenCalled();
  });

  it('método aumentarQuantidade deve aumentar a quantidade da carta', () => {
    const spy = jest.spyOn(component, 'aumentarQuantidade');
    component.deck.cartas = [carta];
    const quantidade = component.deck.cartas[0].quantidade;     
    component.aumentarQuantidade(carta);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade + 1);
    expect(spy).toHaveBeenCalled();
  });

  it('método aumentarQuantidade não deve aumentar a quantidade da carta caso já tenham 4 cartas no deck', () => {
    const spy = jest.spyOn(component, 'aumentarQuantidade');
    component.deck.cartas = [cartaQuantidade4];
    const quantidade = component.deck.cartas[0].quantidade;     
    component.aumentarQuantidade(carta);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade);
    expect(spy).toHaveBeenCalled();
  });

  it('método aumentarQuantidade não deve aumentar a quantidade da carta caso já tenham 60 cartas no deck', () => {
    const spy = jest.spyOn(component, 'aumentarQuantidade');
    component.deck.cartas = cartasQuantidadeTotalDeck;
    const quantidade = component.deck.cartas[0].quantidade;     
    component.aumentarQuantidade(carta);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade);
    expect(spy).toHaveBeenCalled();
  });

  it('método diminuirQuantidade deve diminuir a quantidade da carta', () => {
    const spy = jest.spyOn(component, 'diminuirQuantidade');
    component.deck.cartas = [cartaQuantidade2];
    const quantidade = component.deck.cartas[0].quantidade;     
    component.diminuirQuantidade(cartaQuantidade2);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade - 1);
    expect(spy).toHaveBeenCalled();
  });

  it('método diminuirQuantidade não deve diminuir a quantidade da carta caso a quantidade seja 1', () => {
    const spy = jest.spyOn(component, 'diminuirQuantidade');
    component.deck.cartas = [cartaQuantidade1];
    const quantidade = component.deck.cartas[0].quantidade;     
    component.diminuirQuantidade(cartaQuantidade1);

    expect(component.deck.cartas[0].quantidade).toEqual(quantidade);
    expect(spy).toHaveBeenCalled();
  });

  it('método retornarQuantidadeTotalCartas deve retornar a quantidade total de cartas no deck', () => {
    const spy = jest.spyOn(component, 'retornarQuantidadeTotalCartas');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    
    expect(component.retornarQuantidadeTotalCartas()).toEqual(60);
    expect(spy).toHaveBeenCalled();
  });

  it('método retornarQuantidadeCartasPorNome deve retornar a quantidade total de cartas por nome no deck', () => {
    const spy = jest.spyOn(component, 'retornarQuantidadeCartasPorNome');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    
    expect(component.retornarQuantidadeCartasPorNome("Charizard")).toEqual(4);
    expect(spy).toHaveBeenCalled();
  });

  it('método validarDeck deve retornar true caso o nome do deck esteja válido e o deck tenha entre 24 e 60 cartas', () => {
    const spy = jest.spyOn(component, 'validarDeck');
    component.deck.nome = "teste"
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    
    expect(component.validarDeck()).toEqual(true);
    expect(spy).toHaveBeenCalled();
  });

  it('método validarDeck deve retornar false caso o nome do deck esteja vazio', () => {
    const spy = jest.spyOn(component, 'validarDeck');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    
    expect(component.validarDeck()).toEqual(false);
    expect(spy).toHaveBeenCalled();
  });

  it('método validarDeck deve retornar false caso o deck não tenha entre 24 e 60 cartas', () => {
    const spy = jest.spyOn(component, 'validarDeck');
    component.deck.nome = "teste"
    component.deck.cartas = [carta];    
    
    expect(component.validarDeck()).toEqual(false);
    expect(spy).toHaveBeenCalled();
  });

  it('método cartaSelecionada deve retornar a classe carta-selecionada caso a carta informada esteja entre as cartas do deck', () => {
    const spy = jest.spyOn(component, 'cartaSelecionada');
    component.deck.nome = "teste"
    component.deck.cartas = [carta];    
    
    expect(component.cartaSelecionada(carta)).toEqual('carta-selecionada');
    expect(spy).toHaveBeenCalled();
  });

  it('método cartaSelecionada deve retornar a uma string vazia caso a carta informada não esteja entre as cartas do deck', () => {
    const spy = jest.spyOn(component, 'cartaSelecionada');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    
    expect(component.cartaSelecionada(carta)).toEqual('');
    expect(spy).toHaveBeenCalled();
  });

  it('método salvar deve adicionar um deck caso o id seja 0', () => {
    const spy = jest.spyOn(component, 'salvar');
    const spyAdicionar = jest.spyOn(component, 'adicionarDeck');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    component.deck.nome = "teste";
    component.salvar();
    
    expect(spy).toHaveBeenCalled();
    expect(spyAdicionar).toHaveBeenCalled();
  });

  it('método salvar deve editar um deck caso o id seja maior que 0', () => {
    const spy = jest.spyOn(component, 'salvar');
    const spyEditar = jest.spyOn(component, 'editarDeck');
    component.deck.id = 1;
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    component.deck.nome = "teste";
    component.salvar();
    
    expect(spy).toHaveBeenCalled();
    expect(spyEditar).toHaveBeenCalled();
  });

  it('método salvar não deve fazer nada caso o deck esteja inválido', () => {
    const spy = jest.spyOn(component, 'salvar');
    const spyAdicionar = jest.spyOn(component, 'adicionarDeck');
    const spyEditar = jest.spyOn(component, 'editarDeck');
    component.deck.cartas = cartasQuantidadeTotalDeck;    
    component.salvar();
    
    expect(spy).toHaveBeenCalled();
    expect(spyAdicionar).toHaveBeenCalledTimes(0);
    expect(spyEditar).toHaveBeenCalledTimes(0);
  });
});
