import { Deck } from 'src/app/models/deck';
import { CartaMock } from './carta-mock';

export class DeckMock {
  public static retornarDecks(): Deck[] {
    const cartas = [this.retornarDeck(1, "Deck teste", 50), this.retornarDeck(2, "Teste 2", 30), this.retornarDeck(3, "Deck 3", 40), this.retornarDeck(4, "Deck final", 60)];
    return cartas;
  }

  public static retornarDeck(id: number, nome: string, quantidade: number): Deck {
    const deck: Deck = new Deck();
    deck.id
    deck.cartas = CartaMock.retornarCartas();
    deck.nome = nome;
    deck.quantidadeCartas = quantidade;
    return deck;
  }
}