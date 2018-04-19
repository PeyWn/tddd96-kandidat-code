import { Injectable } from '@angular/core';

@Injectable()
export class CurrentViewService {
  currentView: string = '';
  constructor() { }
  getCurrentView(): string {
    return this.currentView;
  }
  setCurrentView(newView: string): void {
    this.currentView = newView;
  }
}
