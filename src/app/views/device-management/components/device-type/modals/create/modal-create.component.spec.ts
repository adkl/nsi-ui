import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeviceType } from './modal-create.component';

describe('CreateDeviceType', () => {
  let component: CreateDeviceType;
  let fixture: ComponentFixture<CreateDeviceType>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeviceType ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeviceType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});