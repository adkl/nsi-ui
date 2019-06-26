import { TestBed } from '@angular/core/testing';

import { DeviceTypesService } from './device-types.service';

describe('DeviceTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceTypesService = TestBed.get(DeviceTypesService);
    expect(service).toBeTruthy();
  });
});
