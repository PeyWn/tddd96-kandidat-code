import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
  viewDate = new Date();
  events = [{
    title: 'TEST',
    color: {
      primary: '#e3bc08',
      secondary: '#fdf1ba'
    },
    start: new Date(2018,4,16,15)

  }]

  constructor() { }

  ngOnInit() {
  }

}
