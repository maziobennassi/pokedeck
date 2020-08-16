import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Carta } from 'src/app/models/carta';
import { Deck } from 'src/app/models/deck';
import { ApiPokemonService } from 'src/app/services/apipokemon.service';
import { DeckService } from 'src/app/services/deck.service';
import { NotificationService } from 'src/app/services/notification.service';

import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'manter-decks',
  templateUrl: './manter-decks.component.html',
  styleUrls: ['./manter-decks.component.css']
})
export class ManterDecksComponent implements OnInit, OnDestroy {
  public deck: Deck = new Deck();
  public cartas: Carta[];
  public pagina: number = 1;
  public pesquisa: string = "";
  private quantidadePagina: number = 20;
  private dialogSub: any;
  private apiPokemonSub: any;

  constructor(private apiPokemonService: ApiPokemonService,
    private deckService: DeckService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.deck = this.deckService.buscarPorId(id);
    }

    this.buscarPaginado();
  }

  ngOnDestroy(): void {
    this.dialogSub?.unsubscribe();
    this.apiPokemonSub?.unsubscribe();
  }

  public adicionarCarta(novaCarta: Carta): void {
    if (this.validarQuantidadeMaximaCartasPorNome(novaCarta.name) && this.validarQuantidadeMaximaCartasDeck()) {
      if (this.verificarCartaAdicionada(novaCarta)) {
        const cartaExistente = this.deck.cartas.find(carta => carta.id === novaCarta.id);
        cartaExistente.quantidade += 1;
      } else {
        novaCarta.quantidade = 1;
        this.deck.cartas.push(novaCarta);
      }
    }
  }

  public proximaPagina(): void {
    this.pagina += 1;
    this.consultar();
  }

  public paginaAnterior(): void {
    this.pagina -= 1;
    this.consultar();
  }

  private consultar(): void {
    if (this.pesquisa) {
      this.buscarPaginadoFiltrado();
    } else {
      this.buscarPaginado();
    }
  }

  private buscarPaginado(): void {
    this.apiPokemonSub = this.apiPokemonService.buscarTodasCartasPaginado(this.pagina, this.quantidadePagina).subscribe(result => {
      this.cartas = result.cards;
    });
  }

  private buscarPaginadoFiltrado(): void {
    this.apiPokemonSub = this.apiPokemonService.buscarTodasCartasPaginadoPorNome(this.pagina, this.quantidadePagina, this.pesquisa).subscribe(result => {
      this.cartas = result.cards;
    });
  }

  public aumentarQuantidade(carta: Carta): void {
    if (this.retornarQuantidadeCartasPorNome(carta.name) < 4 && this.validarQuantidadeMaximaCartasDeck()) {
      carta.quantidade += 1;
    }
  }

  public diminuirQuantidade(carta: Carta): void {
    if (carta.quantidade > 1) {
      carta.quantidade -= 1;
    }
  }

  public filtrarCartas(): void {
    this.buscarPaginadoFiltrado();
  }

  public salvar(): void {
    if (this.validarDeck()) {
      this.deck.quantidadeCartas = this.retornarQuantidadeTotalCartas();
      if (this.deck.id > 0) {
        this.deckService.editar(this.deck);
        this.notificationService.mensagemSucesso("Deck editado com sucesso!");
      } else {
        this.deckService.salvar(this.deck);
        this.notificationService.mensagemSucesso("Deck cadastrado com sucesso!");
      }
      this.router.navigate(['decks']);
    }
  }

  public confirmacaoRemoverCarta(carta: Carta): void {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent);

    this.dialogSub = dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.removerCarta(carta);
      }
    });
  }

  private removerCarta(carta: Carta): void {
    const index = this.deck.cartas.indexOf(carta);
    this.deck.cartas.splice(index, 1);
    this.notificationService.mensagemSucesso("Carta removida com sucesso!");
  }

  public retornarQuantidadeTotalCartas(): number {
    return this.deck.cartas.reduce((anterior, atual) => +anterior + +atual.quantidade, 0);
  }

  public retornarQuantidadeCartasPorNome(nome: string): number {
    const cartas = this.deck.cartas.filter(carta => carta.name === nome);
    return cartas.map(carta => carta.quantidade).reduce((anterior, atual) => +anterior + +atual, 0);
  }

  public validarDeck(): boolean {
    return this.validarQuantidadeCartasDeck() && this.validarNomeDeck();
  }

  private validarQuantidadeMaximaCartasDeck(): boolean {
    const totalCartas = this.retornarQuantidadeTotalCartas();
    if (totalCartas < 60) {
      return true;
    } else {
      this.notificationService.mensagemAlerta("O deck atingiu o limite máximo de 60 cartas.");
      return false;
    }
  }

  private validarQuantidadeMaximaCartasPorNome(nome: string): boolean {
    const totalCartas = this.retornarQuantidadeCartasPorNome(nome);
    if (totalCartas < 4) {
      return true;
    } else {
      this.notificationService.mensagemAlerta("O deck atingiu o limite máximo de 4 cartas com o mesmo nome.");
      return false;
    }
  }

  private validarQuantidadeCartasDeck(): boolean {
    const totalCartas = this.retornarQuantidadeTotalCartas();
    if (totalCartas >= 24 && totalCartas <= 60) {
      return true;
    } else {
      this.notificationService.mensagemAlerta("O deck deve possuir no mínimo 24 cartas e no máximo 60 cartas.");
      return false;
    }
  }

  private verificarCartaAdicionada(novaCarta: Carta): boolean {
    return !isNullOrUndefined(this.deck.cartas.find(carta => carta.id === novaCarta.id));
  }

  private validarNomeDeck() {
    if (this.deck.nome && this.deck.nome.trim()) {
      return true;
    } else {
      this.notificationService.mensagemAlerta("Informe um nome válido para o deck.");
      return false;
    }
  }

  public cartaSelecionada(carta: Carta): string {
    return this.verificarCartaAdicionada(carta) ? "carta-selecionada" : ""; 
  }
}