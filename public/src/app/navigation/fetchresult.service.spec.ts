import { TestBed } from '@angular/core/testing';

import { FetchResultService } from './fetchresult.service';

describe('FetchresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchResultService = TestBed.get(FetchResultService);
    expect(service).toBeTruthy();
  });
});
