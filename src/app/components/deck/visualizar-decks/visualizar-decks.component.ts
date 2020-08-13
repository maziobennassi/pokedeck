import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-visualizar-decks',
  templateUrl: './visualizar-decks.component.html',
  styleUrls: ['./visualizar-decks.component.css']
})
export class VisualizarDecksComponent implements OnInit {
  deck: Deck = new Deck();
  tipos: string[] = []; 
  todosTiposEnergia: string[] = []; 
  tiposEnergia: string[] = []; 

  constructor(private deckService: DeckService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.deck = this.deckService.buscarPorId(id);
      this.tipos = this.deck.cartas.map(carta => carta.supertype).filter((valor, index, array) => array.indexOf(valor) === index);
      this.deck.cartas.map(carta => carta.types).forEach(tipos => tipos?.forEach(tipo => this.todosTiposEnergia.push(tipo)));
      this.tiposEnergia = this.todosTiposEnergia.filter((valor, index, array) => array.indexOf(valor) === index);
    }
  }

  quantidadeCartasPorSupertype(tipo: string): number {
    return this.deck.cartas.filter(carta => carta.supertype === tipo).length;
  }

  retornarCaminhoImagem(tipoEnergia: string): string {
    return `../../.../../../../assets/images/${tipoEnergia.toLowerCase()}.png`;
  }
}
