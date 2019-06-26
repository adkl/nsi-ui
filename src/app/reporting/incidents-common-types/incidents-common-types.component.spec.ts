import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsCommonTypesComponent } from './incidents-common-types.component';

describe('IncidentsCommonTypesComponent', () => {
  let component: IncidentsCommonTypesComponent;
  let fixture: ComponentFixture<IncidentsCommonTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsCommonTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsCommonTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
