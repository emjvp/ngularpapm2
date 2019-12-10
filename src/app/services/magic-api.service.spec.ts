import { TestBed } from '@angular/core/testing';

import { MagicApiService } from './magic-api.service';

describe('MagicApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicApiService = TestBed.get(MagicApiService);
    expect(service).toBeTruthy();
  });
});
