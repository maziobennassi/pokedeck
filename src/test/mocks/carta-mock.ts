import { Carta } from 'src/app/models/carta';

export class CartaMock {
    public static mockCartas(): Carta[] {
        const cartas: Carta[] = [
            this.mockCarta("Pikachu", "Pokémon", ["Lightning"], 3),
            this.mockCarta("Charmander", "Pokémon", ["Fire"], 2),
            this.mockCarta("Magmar", "Pokémon", ["Fire"], 1),
            this.mockCarta("PlusPower", "Trainer", null, 4),
            this.mockCarta("Maintenance", "Trainer", null, 3),
            this.mockCarta("Rose Tower", "Trainer", null, 2),
            this.mockCarta("Fire Energy", "Energy", null, 2),
            this.mockCarta("Grass Energy", "Energy", null, 1),
            this.mockCarta("Water Energy", "Energy", null, 1)
        ];
        return cartas;
    }

    public static mockCarta(name: string, supertype: string, types: string[], quantidade: number): Carta {
        const carta = new Carta();
        carta.name = name;
        carta.supertype = supertype;
        carta.types = types;
        carta.quantidade = quantidade;
        return carta;
    }
}