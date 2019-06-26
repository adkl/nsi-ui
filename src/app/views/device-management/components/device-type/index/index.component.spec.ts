import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDeviceTypes } from './index.component';

describe('IndexDeviceTypes', () => {
  let component: IndexDeviceTypes;
  let fixture: ComponentFixture<IndexDeviceTypes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDeviceTypes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDeviceTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
