import { TestBed } from '@angular/core/testing';

import { TokenpassInterceptor } from './tokenpass.interceptor';

describe('TokenpassInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenpassInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenpassInterceptor = TestBed.inject(TokenpassInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
