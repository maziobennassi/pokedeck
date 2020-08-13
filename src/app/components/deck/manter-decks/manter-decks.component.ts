import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Carta } from 'src/app/models/carta';
import { Deck } from 'src/app/models/deck';
import { ApiPokemonService } from 'src/app/services/apipokemon.service';
import { DeckService } from 'src/app/services/deck.service';
import { NotificationService } from 'src/app/services/notification.service';

import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'manter-decks',
  templateUrl: './manter-decks.component.html',
  styleUrls: ['./manter-decks.component.css']
})
export class ManterDecksComponent implements OnInit, OnDestroy {
  public deck: Deck = new Deck();
  public cartas: Carta[];
  public pagina: number = 1;
  private quantidadePagina: number = 20;
  private pesquisa: string = "";
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

  adicionarCarta(novaCarta: Carta): void {
    const totalCartas = this.retornarQuantidadeTotalCartas();
    if(!this.deck.cartas.find(carta => carta.id === novaCarta.id)) {
      if (totalCartas < 60) {
        novaCarta.quantidade = 1;
        this.deck.cartas.push(novaCarta);
      } else {
      this.notificationService.mensagemAlerta("O deck atingiu o limite máximo de 60 cartas.");
      }
    } else {
      this.notificationService.mensagemAlerta("Esta carta já foi adicionada ao deck.");
    }
  }

  proximaPagina(): void {
    this.pagina += 1;
    this.consultar();
  }

  paginaAnterior(): void {
    this.pagina -= 1;
    this.consultar();
  }

  consultar(): void {
    if (this.pesquisa) {
      this.buscarPaginadoFiltrado();
    } else {
      this.buscarPaginado();
    }
  }

  buscarPaginado(): void {
    this.apiPokemonSub = this.apiPokemonService.buscarTodasCartasPaginado(this.pagina, this.quantidadePagina).subscribe(result => {
      this.cartas = result.cards;
    });
  }

  buscarPaginadoFiltrado(): void {
    this.apiPokemonSub = this.apiPokemonService.buscarTodasCartasPaginadoPorNome(this.pagina, this.quantidadePagina, this.pesquisa).subscribe(result => {
      this.cartas = result.cards;
    });
  }

  validarDeck(): boolean {
    const totalCartas = this.retornarQuantidadeTotalCartas();
    return totalCartas >= 24 && totalCartas <= 60;
  }

  aumentarQuantidade(carta: Carta): void {
    const totalCartas = this.retornarQuantidadeTotalCartas();
    if (carta.quantidade < 4 && totalCartas < 60) {
      carta.quantidade += 1;
    }
  }

  diminuirQuantidade(carta: Carta): void {
    if (carta.quantidade > 1) {
      carta.quantidade -= 1;
    }
  }

  filtrarCartas(pesquisa: string): void {
      this.pesquisa = pesquisa;
      this.buscarPaginadoFiltrado();
  }

  salvar(): void {
    if (this.deck.nome.trim()) {
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
      } else {
        this.notificationService.mensagemAlerta("O deck deve possuir no mínimo 24 cartas e no máximo 60 cartas.");
      }
    } else {
      this.notificationService.mensagemAlerta("Informe um nome válido para o deck.");
    }
  }

  confirmacaoRemoverCarta(carta: Carta): void {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent);

     this.dialogSub = dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.removerCarta(carta);
      }
    });
  }

  removerCarta(carta: Carta): void {
    const index = this.deck.cartas.indexOf(carta);
    this.deck.cartas.splice(index, 1);
    this.notificationService.mensagemSucesso("Carta removida com sucesso!");
  }

  retornarQuantidadeTotalCartas(): number {
    return this.deck.cartas.reduce((anterior, atual) => +anterior + +atual.quantidade, 0);
  }
}