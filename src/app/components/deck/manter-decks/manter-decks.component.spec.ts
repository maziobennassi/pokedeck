import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterDecksComponent } from './manter-decks.component';

describe('ManterDecksComponent', () => {
  let component: ManterDecksComponent;
  let fixture: ComponentFixture<ManterDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
