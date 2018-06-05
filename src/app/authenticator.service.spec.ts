import { TestBed, inject } from '@angular/core/testing';

import { AuthenticatorService } from './authenticator.service';

describe('AuthenticatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatorService]
    });
  });

  it('should be created', inject([AuthenticatorService], (service: AuthenticatorService) => {
    expect(service).toBeTruthy();
  }));
});
