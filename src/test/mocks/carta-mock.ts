import { Carta } from 'src/app/models/carta';

export class CartaMock {
    public static retornarCartas(): Carta[] {
        const cartas: Carta[] = [
            this.retornarCarta("1", "Pikachu", "Pokémon", ["Lightning"], 3),
            this.retornarCarta("2", "Charmander", "Pokémon", ["Fire"], 2),
            this.retornarCarta("3", "Magmar", "Pokémon", ["Fire"], 1),
            this.retornarCarta("4", "PlusPower", "Trainer", null, 4),
            this.retornarCarta("5", "Maintenance", "Trainer", null, 3),
            this.retornarCarta("6", "Rose Tower", "Trainer", null, 2),
            this.retornarCarta("7", "Fire Energy", "Energy", null, 2),
            this.retornarCarta("8", "Grass Energy", "Energy", null, 1),
            this.retornarCarta("9", "Water Energy", "Energy", null, 1)
        ];
        return cartas;
    }

    public static retornarCartasQuantidadeTotalDeck(): Carta[] {
        const cartas: Carta[] = [
            this.retornarCarta("1", "Pikachu", "Pokémon", ["Lightning"], 4),
            this.retornarCarta("2", "Charmander", "Pokémon", ["Fire"], 4),
            this.retornarCarta("3", "Charizard", "Pokémon", ["Fire"], 4),
            this.retornarCarta("4", "Squirtle", "Pokémon", ["Water"], 4),
            this.retornarCarta("5", "Blastoise", "Pokémon", ["Water"], 4),
            this.retornarCarta("6", "Bulbasaur", "Pokémon", ["Grass"], 4),
            this.retornarCarta("7", "Venusaur", "Pokémon", ["Grass"], 4),
            this.retornarCarta("8", "Bellossom", "Pokémon", ["Grass"], 4),
            this.retornarCarta("9", "Magmar", "Pokémon", ["Fire"], 4),
            this.retornarCarta("10", "PlusPower", "Trainer", null, 4),
            this.retornarCarta("11", "Maintenance", "Trainer", null, 4),
            this.retornarCarta("12", "Rose Tower", "Trainer", null, 4),
            this.retornarCarta("13", "Fire Energy", "Energy", null, 4),
            this.retornarCarta("14", "Grass Energy", "Energy", null, 4),
            this.retornarCarta("15", "Water Energy", "Energy", null, 4)
        ];
        return cartas;
    }

    public static retornarCarta(id: string, name: string, supertype: string, types: string[], quantidade: number): Carta {
        const carta = new Carta();
        carta.id = id;
        carta.name = name;
        carta.supertype = supertype;
        carta.types = types;
        carta.quantidade = quantidade;
        return carta;
    }

    public static retornarTiposEnergia(): string[] {
        let todosTiposEnergia: string[];
        CartaMock.retornarCartas().map(carta => carta.types).forEach(tipos => tipos?.forEach(tipo => todosTiposEnergia.push(tipo)));
        return todosTiposEnergia.filter((valor, index, array) => array.indexOf(valor) === index);
    }

    public static retornarTipos(): string[] {
        return CartaMock.retornarCartas().map(carta => carta.supertype).filter((valor, index, array) => array.indexOf(valor) === index);
    }
}