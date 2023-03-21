import { TestBed } from '@angular/core/testing';

import { MypostserviceService } from './mypostservice.service';

describe('MypostserviceService', () => {
  let service: MypostserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypostserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
