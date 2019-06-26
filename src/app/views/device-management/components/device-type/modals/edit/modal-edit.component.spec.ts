import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceType } from './modal-edit.component';

describe('EditDeviceType', () => {
  let component: EditDeviceType;
  let fixture: ComponentFixture<EditDeviceType>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeviceType ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});