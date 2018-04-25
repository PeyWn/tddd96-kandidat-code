import { TestBed, inject } from '@angular/core/testing';

import { Icd10Service } from './icd10.service';

describe('Icd10Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Icd10Service]
    });
  });

  it('should be created', inject([Icd10Service], (service: Icd10Service) => {
    expect(service).toBeTruthy();
  }));
});
