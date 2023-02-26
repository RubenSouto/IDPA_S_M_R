import { TestBed } from '@angular/core/testing';

import { HardCodeThemaDataService } from './hard-code-thema-data.service';

describe('HardCodeThemaDataService', () => {
  let service: HardCodeThemaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodeThemaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
