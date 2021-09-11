import { TestBed } from '@angular/core/testing';

import { NgFileInputService } from './ng-file-input.service';

describe('NgFileInputService', () => {
  let service: NgFileInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFileInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
