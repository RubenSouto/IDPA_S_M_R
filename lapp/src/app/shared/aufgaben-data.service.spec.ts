import { TestBed } from '@angular/core/testing';

import { AufgabenDataService } from './aufgaben-data.service';

describe('AufgabenDataService', () => {
  let service: AufgabenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AufgabenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
