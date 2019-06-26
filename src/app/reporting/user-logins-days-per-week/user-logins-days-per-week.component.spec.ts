import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginsDaysPerWeekComponent } from './user-logins-days-per-week.component';

describe('UserLoginsDaysPerWeekComponent', () => {
  let component: UserLoginsDaysPerWeekComponent;
  let fixture: ComponentFixture<UserLoginsDaysPerWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginsDaysPerWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginsDaysPerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
