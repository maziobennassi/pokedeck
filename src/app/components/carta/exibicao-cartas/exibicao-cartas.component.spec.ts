import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoCartasComponent } from './exibicao-cartas.component';

describe('ExibicaoCartasComponent', () => {
  let component: ExibicaoCartasComponent;
  let fixture: ComponentFixture<ExibicaoCartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibicaoCartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibicaoCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
