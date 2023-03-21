import { TestBed } from '@angular/core/testing';

import { VformService } from './vform.service';

describe('VformService', () => {
  let service: VformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
