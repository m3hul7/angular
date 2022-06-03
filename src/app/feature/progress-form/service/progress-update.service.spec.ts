import { TestBed } from '@angular/core/testing';

import { ProgressUpdateService } from './progress-update.service';

describe('ProgressUpdateService', () => {
  let service: ProgressUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
