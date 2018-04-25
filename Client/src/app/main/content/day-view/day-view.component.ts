import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
  viewDate = new Date();
  events = [];
  constructor() {}

  ngOnInit() {
  }

}
