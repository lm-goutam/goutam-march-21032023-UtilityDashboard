import { TestBed } from '@angular/core/testing';

import { DaxService } from './dax.service';

describe('DaxService', () => {
  let service: DaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
