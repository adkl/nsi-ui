import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecificDevicesComponent } from './user-specific-devices.component';

describe('UserSpecificDevicesComponent', () => {
  let component: UserSpecificDevicesComponent;
  let fixture: ComponentFixture<UserSpecificDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpecificDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecificDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
