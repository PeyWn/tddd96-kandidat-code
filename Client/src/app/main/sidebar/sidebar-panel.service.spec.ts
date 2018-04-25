import { TestBed, inject } from '@angular/core/testing';

import { SidebarPanelService } from './sidebar-panel.service';

describe('SidebarPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarPanelService]
    });
  });

  it('should be created', inject([SidebarPanelService], (service: SidebarPanelService) => {
    expect(service).toBeTruthy();
  }));
});
