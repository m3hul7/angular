import { TestBed } from '@angular/core/testing';

import { DndFileUploadService } from './dnd-file-upload.service';

describe('DndFileUploadService', () => {
  let service: DndFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
