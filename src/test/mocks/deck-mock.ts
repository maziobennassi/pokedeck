import { Deck } from 'src/app/models/deck';
import { CartaMock } from './carta-mock';

export class DeckMock {
    public mockDecks(): Deck[] {
      const cartas = [this.mockDeck("Deck 1", 50), this.mockDeck("Deck 2", 30), this.mockDeck("Deck 3", 40), this.mockDeck("Deck 4", 60)];
      return cartas;
    }
  
    public mockDeck(nome: string, quantidade: number): Deck {
      const deck = new Deck();
      deck.cartas = CartaMock.mockCartas();
      deck.nome = nome;
      deck.quantidadeCartas = quantidade;
      return deck;
    }
  }