import { TestBed, inject } from '@angular/core/testing';

import { ProcedureService } from './procedure.service';

describe('ProcedureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcedureService]
    });
  });

  it('should be created', inject([ProcedureService], (service: ProcedureService) => {
    expect(service).toBeTruthy();
  }));
});
