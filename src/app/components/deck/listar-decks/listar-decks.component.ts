import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
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
export class ListarDecksComponent implements OnInit {
  colunasTabela: string[] = ['nome', 'quantidadeCartas', 'acoes'];
  dataSource = new MatTableDataSource<Deck>();
  decks: Deck[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private deckService: DeckService,
              private notificationService: NotificationService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.decks = this.deckService.buscarTodos();
    this.dataSource.data = this.decks;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarTabela(filtro: string): void {
    filtro = filtro.trim();
    filtro = filtro.toLowerCase();
    this.dataSource.filter = filtro;
  }
  
  confirmacaoRemover(deck: Deck): void {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.remover(deck);
      }
    });
  }

  remover(deck: Deck): void {
    this.deckService.remover(deck);
    const index = this.decks.indexOf(deck);
    this.decks.splice(index, 1);
    this.dataSource.data = this.decks;
    this.notificationService.mensagemSucesso("Deck removido com sucesso!");
  }
}