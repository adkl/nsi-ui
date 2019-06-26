import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsGridListComponent } from './documents-grid-list.component';

describe('DocumentsGridListComponent', () => {
  let component: DocumentsGridListComponent;
  let fixture: ComponentFixture<DocumentsGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
