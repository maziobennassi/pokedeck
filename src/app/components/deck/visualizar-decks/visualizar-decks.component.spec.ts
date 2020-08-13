import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDecksComponent } from './visualizar-decks.component';

describe('VisualizarDecksComponent', () => {
  let component: VisualizarDecksComponent;
  let fixture: ComponentFixture<VisualizarDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
