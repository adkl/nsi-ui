import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleBrakesComponent } from './rule-brakes.component';

describe('RuleBrakesComponent', () => {
  let component: RuleBrakesComponent;
  let fixture: ComponentFixture<RuleBrakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleBrakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleBrakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
