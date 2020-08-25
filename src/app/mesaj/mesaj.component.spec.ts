import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesajComponent } from './mesaj.component';

describe('MesajComponent', () => {
  let component: MesajComponent;
  let fixture: ComponentFixture<MesajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
