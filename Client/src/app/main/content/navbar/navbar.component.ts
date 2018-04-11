import { Component, OnInit } from '@angular/core';
import {CurrentViewService} from '../../current-view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentview;
  getView() {
    this.currentview = this.cvService.getCurrentView();
  }
  setView(newView) {
    this.cvService.setCurrentView(newView);
  }
  constructor(private cvService: CurrentViewService ) { }

  ngOnInit() {
    this.setView("calendar");
  }

}
