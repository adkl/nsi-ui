import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsGridItemComponent } from './documents-grid-item.component';

describe('DocumentsGridItemComponent', () => {
  let component: DocumentsGridItemComponent;
  let fixture: ComponentFixture<DocumentsGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
