import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantActiveUsersComponent } from './tenant-active-users.component';

describe('TenantActiveUsersComponent', () => {
  let component: TenantActiveUsersComponent;
  let fixture: ComponentFixture<TenantActiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantActiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
