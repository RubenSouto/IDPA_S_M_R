import { TestBed } from '@angular/core/testing';

import { TheorieDataService } from './theorie-data.service';

describe('TheorieDataService', () => {
  let service: TheorieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheorieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
