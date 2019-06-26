import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsPriorityInTimePeriodComponent } from './incidents-priority-in-time-period.component';

describe('IncidentsPriorityInTimePeriodComponent', () => {
  let component: IncidentsPriorityInTimePeriodComponent;
  let fixture: ComponentFixture<IncidentsPriorityInTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsPriorityInTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsPriorityInTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
