import { TestBed } from '@angular/core/testing';

import { CitaExamenesService } from './cita-examenes.service';

describe('CitaExamenesService', () => {
  let service: CitaExamenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaExamenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
