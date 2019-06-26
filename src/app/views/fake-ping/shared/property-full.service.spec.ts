import { TestBed } from '@angular/core/testing';

import { PropertyFullService } from './property-full.service';

describe('PropertyFullService', () => {
beforeEach(() => TestBed.configureTestingModule({}));

it('should be created', () => {
  const service: PropertyFullService = TestBed.get(PropertyFullService);
  expect(service).toBeTruthy();
});
});