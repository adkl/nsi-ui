import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevice } from './modal-create.component';

describe('CreateDevice', () => {
  let component: CreateDevice;
  let fixture: ComponentFixture<CreateDevice>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDevice ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDevice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});