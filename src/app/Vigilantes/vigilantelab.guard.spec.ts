import { TestBed } from '@angular/core/testing';

import { VigilantelabGuard } from './vigilantelab.guard';

describe('VigilantelabGuard', () => {
  let guard: VigilantelabGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilantelabGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
