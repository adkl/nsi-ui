import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTemplateComponent } from './create-edit-template.component';

describe('GenerateTemplateComponent', () => {
  let component: CreateEditTemplateComponent;
  let fixture: ComponentFixture<CreateEditTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
