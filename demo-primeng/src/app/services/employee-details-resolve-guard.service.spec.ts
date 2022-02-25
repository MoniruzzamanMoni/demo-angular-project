import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsResolveGuardService } from './employee-details-resolve-guard.service';

describe('EmployeeDetailsResolveGuardService', () => {
  let service: EmployeeDetailsResolveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDetailsResolveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
