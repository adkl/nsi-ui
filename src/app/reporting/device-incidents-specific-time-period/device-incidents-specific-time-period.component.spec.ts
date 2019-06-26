import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIncidentsSpecificTimePeriodComponent } from './device-incidents-specific-time-period.component';

describe('DeviceIncidentsSpecificTimePeriodComponent', () => {
  let component: DeviceIncidentsSpecificTimePeriodComponent;
  let fixture: ComponentFixture<DeviceIncidentsSpecificTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIncidentsSpecificTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIncidentsSpecificTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
