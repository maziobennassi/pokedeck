import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { ExibicaoCartaModule } from '../../carta/exibicao-cartas/exibicao-cartas.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ModalConfirmacaoModule } from '../../shared/modal-confirmacao/modal-confirmacao.module';
import { ListarDecksRoutingModule } from './listar-decks-routing.module';
import { ListarDecksComponent } from './listar-decks.component';
import { DeckMock } from 'src/test/mocks/deck-mock';

describe('ListarDecksComponent', () => {
  let component: ListarDecksComponent;
  let fixture: ComponentFixture<ListarDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDecksComponent],
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        RouterModule,
        ExibicaoCartaModule,
        LoaderModule,
        ModalConfirmacaoModule,
        ListarDecksRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.dataSource.data = DeckMock.retornarDecks();
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('método quantidadeCartasPorSupertype deve retornar a quantidade de cartas com o supertype Pokémon', () => {
    const spy = jest.spyOn(component, 'filtrarTabela');
    component.filtrarTabela("Teste");

    expect(component.dataSource.filteredData.length).toEqual(2);
    expect(spy).toHaveBeenCalled();
  });
});
