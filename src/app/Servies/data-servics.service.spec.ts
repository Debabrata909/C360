import { TestBed } from '@angular/core/testing';

import { DataServicsService } from './data-servics.service';

describe('DataServicsService', () => {
  let service: DataServicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
