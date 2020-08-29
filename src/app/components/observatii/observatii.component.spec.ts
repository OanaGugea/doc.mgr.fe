import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservatiiComponent } from './observatii.component';

describe('ObservatiiComponent', () => {
  let component: ObservatiiComponent;
  let fixture: ComponentFixture<ObservatiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservatiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
