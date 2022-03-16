import { TestBed } from '@angular/core/testing';

import { LaboratoristaService } from './laboratorista.service';

describe('LaboratoristaService', () => {
  let service: LaboratoristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
