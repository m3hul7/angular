import { TestBed } from '@angular/core/testing';

import { ChartColumnService } from './chart-column.service';

describe('ChartColumnService', () => {
  let service: ChartColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
