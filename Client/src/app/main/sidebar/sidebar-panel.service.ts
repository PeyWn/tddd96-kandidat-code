import { Injectable } from '@angular/core';

@Injectable()
export class SidebarPanelService {
  get keyword(): string {
    return this._keyword;
  }

  set keyword(value: string) {
    this._keyword = value;
  }
  currentPanel = 'overview';
  private _keyword = '';
  constructor() {}
  getCurrentPanel() {return this.currentPanel; }

  setCurrentPanel(charmander) { this.currentPanel = charmander; }
}
