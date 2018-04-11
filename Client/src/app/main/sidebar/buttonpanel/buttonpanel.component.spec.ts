import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonpanelComponent } from './buttonpanel.component';

describe('ButtonpanelComponent', () => {
  let component: ButtonpanelComponent;
  let fixture: ComponentFixture<ButtonpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
