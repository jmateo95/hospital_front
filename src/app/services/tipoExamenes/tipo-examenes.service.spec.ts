import { TestBed } from '@angular/core/testing';

import { TipoExamenService } from './tipo-examenes.service';

describe('TipoExamenesService', () => {
  let service: TipoExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
