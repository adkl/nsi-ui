import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsSpecificTimePeriodComponent } from './incidents-specific-time-period.component';

describe('IncidentsSpecificTimePeriodComponent', () => {
  let component: IncidentsSpecificTimePeriodComponent;
  let fixture: ComponentFixture<IncidentsSpecificTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsSpecificTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsSpecificTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
