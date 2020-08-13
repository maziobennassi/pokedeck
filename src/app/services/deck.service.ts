import { Injectable } from '@angular/core';

import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private storageDeck: string = "decks";

  constructor() { }

  buscarTodos(): Deck[] {
    const decks: Deck[] = JSON.parse(localStorage.getItem(this.storageDeck));
    return decks ?? [];
  }

  buscarPorId(id: number): Deck {
    const decks: Deck[] = this.buscarTodos();
    const deck: Deck = decks.find(x => x.id == id);
    return deck;
  }

  salvar(deck: Deck): void {
    deck.id = this.buscarProximoIdDB();
    this.adicionarAtualizarLocalStorage(deck);
  }

  editar(deck: Deck): void {
    const deckDB: Deck = this.buscarPorId(deck.id);
    this.remover(deckDB);
    this.adicionarAtualizarLocalStorage(deck);
  }

  remover(deck: Deck): void {
    const decks: Deck[] = this.buscarTodos();
    const index = decks.indexOf(deck);
    decks.splice(index, 1);
    localStorage.setItem(this.storageDeck, JSON.stringify(decks));
  }

  adicionarAtualizarLocalStorage(deck: Deck) {
    const decks: Deck[] = this.buscarTodos();
    decks.push(deck);
    localStorage.setItem(this.storageDeck, JSON.stringify(decks));
  }

  buscarProximoIdDB(): number {
    const decks: Deck[] = this.buscarTodos();
    const ids: number[] = decks.map(x => x.id);
    const maiorId = Math.max.apply(Math, ids); 
    return ids.length == 0 ? 1 : maiorId + 1;
  }
}
