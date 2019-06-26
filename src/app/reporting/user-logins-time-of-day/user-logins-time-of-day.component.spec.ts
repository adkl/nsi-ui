import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginsTimeOfDayComponent } from './user-logins-time-of-day.component';

describe('UserLoginsTimeOfDayComponent', () => {
  let component: UserLoginsTimeOfDayComponent;
  let fixture: ComponentFixture<UserLoginsTimeOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginsTimeOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginsTimeOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
