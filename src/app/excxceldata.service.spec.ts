import { TestBed } from '@angular/core/testing';

import { ExcxceldataService } from './excxceldata.service';

describe('ExcxceldataService', () => {
  let service: ExcxceldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcxceldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
