import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectariComponent } from './colectari.component';

describe('ColectariComponent', () => {
  let component: ColectariComponent;
  let fixture: ComponentFixture<ColectariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
