import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantCommonIncidentsComponent } from './tenant-common-incidents.component';

describe('TenantCommonIncidentsComponent', () => {
  let component: TenantCommonIncidentsComponent;
  let fixture: ComponentFixture<TenantCommonIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantCommonIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCommonIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
