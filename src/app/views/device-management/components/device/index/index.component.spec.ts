import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDevices } from './index.component';

describe('IndexDevices', () => {
  let component: IndexDevices;
  let fixture: ComponentFixture<IndexDevices>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDevices ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDevices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
