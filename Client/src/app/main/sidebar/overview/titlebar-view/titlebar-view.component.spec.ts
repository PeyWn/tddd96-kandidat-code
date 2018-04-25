import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebarViewComponent } from './titlebar-view.component';

describe('TitlebarViewComponent', () => {
  let component: TitlebarViewComponent;
  let fixture: ComponentFixture<TitlebarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlebarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
