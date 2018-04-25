import { TestBed, inject } from '@angular/core/testing';

import { GetPatientsService } from './get-patients.service';

describe('GetPatientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPatientsService]
    });
  });

  it('should be created', inject([GetPatientsService], (service: GetPatientsService) => {
    expect(service).toBeTruthy();
  }));
});
