import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { DeckMock } from 'src/test/mocks/deck-mock';
import { Deck } from '../models/deck';

describe('DeckService', () => {
  let injector: TestBed;
  let service: DeckService;
  let decks: Deck[] = [];
  let deckAdicionar: Deck = new Deck();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    injector = getTestBed();
    service = TestBed.get(DeckService);
    decks = DeckMock.retornarDecks();
    deckAdicionar = DeckMock.retornarDeck(54, "teste", 40);
  });

  afterEach(() => {
    decks = [];
    deckAdicionar = new Deck();
    service = null;
    localStorage.clear();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('método buscarTodos deve retornar uma lista de decks', () => {
    const spy = jest.spyOn(service, 'buscarTodos');

    expect(service.buscarTodos()).toEqual((JSON.parse(localStorage.getItem("decks")) ?? []));
    expect(spy).toHaveBeenCalled();
  });

  it('método buscarPorId deve retornar um item por Id', () => {
    const spy = jest.spyOn(service, 'buscarPorId');
    
    expect(service.buscarPorId(1)).toEqual(JSON.parse(localStorage.getItem("decks"))?.find(x => x.id === 1));
    expect(spy).toHaveBeenCalled();
  });

  it('método salvar deve adicionar um item no LS', () => {
    const spy = jest.spyOn(service, 'salvar');
    const spyLs = jest.spyOn(localStorage, 'setItem');
    service.salvar(deckAdicionar);

    expect(JSON.parse(localStorage.getItem("decks")).find(deck => deck.nome === deckAdicionar.nome) != null).toBe(true);
    expect(spy).toHaveBeenCalled();
    expect(spyLs).toHaveBeenCalled();
  });

  it('método editar deve alterar um item no LS', () => {
    const spy = jest.spyOn(service, 'editar');
    const spyLs = jest.spyOn(localStorage, 'setItem');
    deckAdicionar.nome = "teste editar";
    service.editar(deckAdicionar);

    expect(JSON.parse(localStorage.getItem("decks")).find(deck => deck.nome === deckAdicionar.nome) != null).toBe(true);
    expect(spy).toHaveBeenCalled();
    expect(spyLs).toHaveBeenCalled();
  });

  it('método remover deve remover um item do LS', () => {
    const spy = jest.spyOn(service, 'remover');
    const spyLs = jest.spyOn(localStorage, 'setItem');
    deckAdicionar.nome = "teste editar";
    service.remover(deckAdicionar);

    expect(spy).toHaveBeenCalled();
    expect(spyLs).toHaveBeenCalled();
  });
});
