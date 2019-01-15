import { TestBed } from '@angular/core/testing';

import { IdleTimeoutServiceService } from './idle-timeout.service';

describe('IdleTimeoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdleTimeoutService = TestBed.get(IdleTimeoutService);
    expect(service).toBeTruthy();
  });
});
