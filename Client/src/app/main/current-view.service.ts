import { Injectable } from '@angular/core';

@Injectable()
export class CurrentViewService {
  currentView = '';
  constructor() { }
  getCurrentView(){
    return this.currentView;
  }
  setCurrentView(newView){
    this.currentView = newView;
  }
}
