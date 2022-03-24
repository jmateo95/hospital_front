import { TestBed } from '@angular/core/testing';

import { VigilantepatientGuard } from './vigilantepatient.guard';

describe('VigilantepatientGuard', () => {
  let guard: VigilantepatientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilantepatientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
