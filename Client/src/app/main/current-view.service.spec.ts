import { TestBed, inject } from '@angular/core/testing';

import { CurrentViewService } from './current-view.service';

describe('CurrentViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentViewService]
    });
  });

  it('should be created', inject([CurrentViewService], (service: CurrentViewService) => {
    expect(service).toBeTruthy();
  }));
});
