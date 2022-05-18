import { TestBed } from '@angular/core/testing';

import { DataPoolService } from './data-pool.service';

describe('DataPoolService', () => {
  let service: DataPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
