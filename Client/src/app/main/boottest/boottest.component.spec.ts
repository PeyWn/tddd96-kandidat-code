import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoottestComponent } from './boottest.component';

describe('BoottestComponent', () => {
  let component: BoottestComponent;
  let fixture: ComponentFixture<BoottestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoottestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoottestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
