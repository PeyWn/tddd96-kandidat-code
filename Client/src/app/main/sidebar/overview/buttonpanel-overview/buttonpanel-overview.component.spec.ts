import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonpanelOverviewComponent } from './buttonpanel-overview.component';

describe('ButtonpanelOverviewComponent', () => {
  let component: ButtonpanelOverviewComponent;
  let fixture: ComponentFixture<ButtonpanelOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonpanelOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonpanelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
