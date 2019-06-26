import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCard } from './card.component';

describe('DeviceCard', () => {
  let component: DeviceCard;
  let fixture: ComponentFixture<DeviceCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});