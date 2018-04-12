import { Injectable } from '@angular/core';

@Injectable()
export class SidebarPanelService {
  currentPanel = 'planning';
  constructor() {}

  getCurrentPanel() {return this.currentPanel; }

  setCurrentPanel(charmander) { this.currentPanel = charmander; }
}
