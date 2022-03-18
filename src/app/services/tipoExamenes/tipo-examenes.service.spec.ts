import { TestBed } from '@angular/core/testing';

import { TipoExamenesService } from './tipo-examenes.service';

describe('TipoExamenesService', () => {
  let service: TipoExamenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoExamenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
