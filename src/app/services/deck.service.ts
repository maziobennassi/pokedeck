import { Injectable } from '@angular/core';

import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private storageDeck: string = "decks";

  constructor() { }

  public buscarTodos(): Deck[] {
    const decks: Deck[] = JSON.parse(localStorage.getItem(this.storageDeck));
    return decks ?? [];
  }

  public buscarPorId(id: number): Deck {
    const decks: Deck[] = this.buscarTodos();
    const deck: Deck = decks.find(x => x.id == id);
    return deck;
  }

  public salvar(deck: Deck): void {
    deck.id = this.buscarProximoIdLS();
    this.adicionarAtualizarLocalStorage(deck);
  }

  public editar(deck: Deck): void {
    const deckDB: Deck = this.buscarPorId(deck.id);
    this.remover(deckDB);
    this.adicionarAtualizarLocalStorage(deck);
  }

  public remover(deck: Deck): void {
    const decks: Deck[] = this.buscarTodos();
    const index = decks.indexOf(deck);
    decks.splice(index, 1);
    localStorage.setItem(this.storageDeck, JSON.stringify(decks));
  }

  private adicionarAtualizarLocalStorage(deck: Deck) {
    const decks: Deck[] = this.buscarTodos();
    decks.push(deck);
    localStorage.setItem(this.storageDeck, JSON.stringify(decks));
  }

  private buscarProximoIdLS(): number {
    const decks: Deck[] = this.buscarTodos();
    const ids: number[] = decks.map(x => x.id);
    const maiorId = Math.max.apply(Math, ids); 
    return ids.length === 0 ? 1 : maiorId + 1;
  }
}
