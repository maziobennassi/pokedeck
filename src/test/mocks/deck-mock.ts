import { Deck } from 'src/app/models/deck';
import { CartaMock } from './carta-mock';

export class DeckMock {
  public static retornarDecks(): Deck[] {
    const cartas = [this.retornarDeck("Deck 1", 50), this.retornarDeck("Deck 2", 30), this.retornarDeck("Deck 3", 40), this.retornarDeck("Deck 4", 60)];
    return cartas;
  }

  public static retornarDeck(nome: string, quantidade: number): Deck {
    const deck: Deck = new Deck();
    deck.cartas = CartaMock.retornarCartas();
    deck.nome = nome;
    deck.quantidadeCartas = quantidade;
    return deck;
  }

  public static recuperarDeckAdicionadoLS(deck: Deck): Deck {
    const decks: Deck[] = JSON.parse(localStorage.getItem("decks"));
    return decks.find(x => x.nome === deck.nome);
  }
}