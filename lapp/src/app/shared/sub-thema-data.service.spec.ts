import { TestBed } from '@angular/core/testing';

import { SubThemaDataService } from './sub-thema-data.service';

describe('SubThemaDataService', () => {
  let service: SubThemaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubThemaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
