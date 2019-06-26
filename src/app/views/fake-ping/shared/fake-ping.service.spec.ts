import { TestBed } from '@angular/core/testing';

import { FakePingService } from './fake-ping.service';

describe('FakePingService', () => {
beforeEach(() => TestBed.configureTestingModule({}));

it('should be created', () => {
  const service: FakePingService = TestBed.get(FakePingService);
  expect(service).toBeTruthy();
});
});