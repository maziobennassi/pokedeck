import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDecksComponent } from './listar-decks.component';

describe('ListarDecksComponent', () => {
  let component: ListarDecksComponent;
  let fixture: ComponentFixture<ListarDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
