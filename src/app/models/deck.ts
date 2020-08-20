import { Carta } from './carta';

export interface Deck {
    id: number;
    nome: string;
    cartas: Carta[];
    quantidadeCartas: number;
}
