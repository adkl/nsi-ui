import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesXIncidentsInTimePeriodComponent } from './devices-x-incidents-in-time-period.component';

describe('DevicesXIncidentsInTimePeriodComponent', () => {
  let component: DevicesXIncidentsInTimePeriodComponent;
  let fixture: ComponentFixture<DevicesXIncidentsInTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesXIncidentsInTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesXIncidentsInTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
