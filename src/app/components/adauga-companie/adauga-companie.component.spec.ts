import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaCompanieComponent } from './adauga-companie.component';

describe('AdaugaCompanieComponent', () => {
  let component: AdaugaCompanieComponent;
  let fixture: ComponentFixture<AdaugaCompanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugaCompanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaCompanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
