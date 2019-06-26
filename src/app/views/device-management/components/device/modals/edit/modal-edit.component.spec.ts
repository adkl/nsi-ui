import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevice } from './modal-edit.component';

describe('EditDevice', () => {
  let component: EditDevice;
  let fixture: ComponentFixture<EditDevice>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevice ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDevice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});