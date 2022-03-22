import { TestBed } from '@angular/core/testing';

import { EspecialidadDoctorService } from './especialidad-doctor.service';

describe('EspecialidadDoctorService', () => {
  let service: EspecialidadDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
