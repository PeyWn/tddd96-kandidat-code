import { TestBed, inject } from '@angular/core/testing';

import { GetCalendarFiltersService } from './get-calendar-filters.service';

describe('GetCalendarFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCalendarFiltersService]
    });
  });

  it('should be created', inject([GetCalendarFiltersService], (service: GetCalendarFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
