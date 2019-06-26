import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesOnSpecificTimePeriodComponent } from './rules-on-specific-time-period.component';

describe('RulesOnSpecificTimePeriodComponent', () => {
  let component: RulesOnSpecificTimePeriodComponent;
  let fixture: ComponentFixture<RulesOnSpecificTimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesOnSpecificTimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesOnSpecificTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
