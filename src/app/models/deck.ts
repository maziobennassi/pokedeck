import { Carta } from './carta';

export class Deck {
    id: number = 0;
    nome: string = "";
    cartas: Carta[] = [];
    quantidadeCartas: number;
}
