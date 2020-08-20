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
  private deck: Deck = Object.assign({cartas: []});
  public tipos: string[] = []; 
  private todosTiposEnergia: string[] = []; 
  public tiposEnergia: string[] = []; 

  constructor(private deckService: DeckService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.deck = this.deckService.buscarPorId(id);
      this.tipos = this.removerItensDuplicados(this.deck.cartas.map(carta => carta.supertype));
      this.preencherTodosTiposEnergia();
      this.tiposEnergia = this.removerItensDuplicados(this.todosTiposEnergia);
    }
  }

  public quantidadeCartasPorSupertype(tipo: string): number {
    return this.deck.cartas.filter(carta => carta.supertype === tipo).reduce((anterior, atual) => +anterior + +atual.quantidade, 0);
  }

  public retornarCaminhoImagem(tipoEnergia: string): string {
    return `../../.../../../../assets/images/${tipoEnergia.toLowerCase()}.png`;
  }

  private removerItensDuplicados(lista: string[]): string[] {
    return lista.filter((valor, index, array) => array.indexOf(valor) === index);
  }

  private preencherTodosTiposEnergia(): void {
    this.deck.cartas.map(carta => carta.types).forEach(tipos => tipos?.forEach(tipo => this.todosTiposEnergia.push(tipo)));
  }
}
