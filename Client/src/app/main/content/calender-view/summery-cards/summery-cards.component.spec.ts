import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryCardsComponent } from './summery-cards.component';

describe('SummeryCardsComponent', () => {
  let component: SummeryCardsComponent;
  let fixture: ComponentFixture<SummeryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummeryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
