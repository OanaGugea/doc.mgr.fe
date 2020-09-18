import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanTabsComponent } from './ocean-tabs.component';

describe('OceanTabsComponent', () => {
  let component: OceanTabsComponent;
  let fixture: ComponentFixture<OceanTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
