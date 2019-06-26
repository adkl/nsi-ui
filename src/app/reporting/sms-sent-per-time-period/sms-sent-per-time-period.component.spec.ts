import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSSentPerTimePeriodComponent } from './sms-sent-per-time-period.component';

describe('SMSSentPerTimePeriodComponent', () => {
  let component: SMSSentPerTimePeriodComponent;
  let fixture: ComponentFixture<SMSSentPerTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMSSentPerTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSSentPerTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
