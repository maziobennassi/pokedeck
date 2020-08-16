import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Deck } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';
import { NotificationService } from 'src/app/services/notification.service';

import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'listar-decks',
  templateUrl: './listar-decks.component.html',
  styleUrls: ['./listar-decks.component.css']
})
export class ListarDecksComponent implements OnInit, OnDestroy {
  public colunasTabela: string[] = ['nome', 'quantidadeCartas', 'acoes'];
  public dataSource = new MatTableDataSource<Deck>();
  private decks: Deck[] = [];
  private dialogSub: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private deckService: DeckService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private mat: MatPaginatorIntl) { }

  ngOnInit(): void {
    this.decks = this.deckService.buscarTodos();
    this.dataSource.data = this.decks;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.traducaoPaginator();
  }

  traducaoPaginator() {
    this.mat.firstPageLabel = "Primeira página";
    this.mat.itemsPerPageLabel = "Itens por página";
    this.mat.lastPageLabel = "Última página";
    this.mat.nextPageLabel = "Próxima página";
    this.mat.previousPageLabel = "Página anterior";
  }

  ngOnDestroy(): void {
    this.dialogSub?.unsubscribe();
  }

  public filtrarTabela(filtro: string): void {
    filtro = filtro.trim();
    filtro = filtro.toLowerCase();
    this.dataSource.filter = filtro;
  }
  
  public confirmacaoRemover(deck: Deck): void {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent);

    this.dialogSub = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.remover(deck);
      }
    });
  }

  private remover(deck: Deck): void {
    this.deckService.remover(deck);
    const index = this.decks.indexOf(deck);
    this.decks.splice(index, 1);
    this.dataSource.data = this.decks;
    this.notificationService.mensagemSucesso("Deck removido com sucesso!");
  }
}