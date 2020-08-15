import { Carta } from 'src/app/models/carta';

export class CartaMock {
    public static retornarCartas(): Carta[] {
        const cartas: Carta[] = [
            this.retornarCarta("Pikachu", "Pokémon", ["Lightning"], 3),
            this.retornarCarta("Charmander", "Pokémon", ["Fire"], 2),
            this.retornarCarta("Magmar", "Pokémon", ["Fire"], 1),
            this.retornarCarta("PlusPower", "Trainer", null, 4),
            this.retornarCarta("Maintenance", "Trainer", null, 3),
            this.retornarCarta("Rose Tower", "Trainer", null, 2),
            this.retornarCarta("Fire Energy", "Energy", null, 2),
            this.retornarCarta("Grass Energy", "Energy", null, 1),
            this.retornarCarta("Water Energy", "Energy", null, 1)
        ];
        return cartas;
    }

    public static retornarCarta(name: string, supertype: string, types: string[], quantidade: number): Carta {
        const carta = new Carta();
        carta.name = name;
        carta.supertype = supertype;
        carta.types = types;
        carta.quantidade = quantidade;
        return carta;
    }
}