import { TestBed, inject } from '@angular/core/testing';

import { BookingInfoService } from './booking-info.service';

describe('BookingInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingInfoService]
    });
  });

  it('should be created', inject([BookingInfoService], (service: BookingInfoService) => {
    expect(service).toBeTruthy();
  }));
});
