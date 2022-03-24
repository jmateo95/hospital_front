import { TestBed } from '@angular/core/testing';

import { VigilantedoctorGuard } from './vigilantedoctor.guard';

describe('VigilantedoctorGuard', () => {
  let guard: VigilantedoctorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilantedoctorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
