import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {
  viewDate = new Date();
  events = [{
    title: 'TEST',
    color: {
      primary: '#e3bc08',
      secondary: '#fdf1ba'
    },
      start: new Date(2018,4,16,15)

  }]

  onDateClick(calendarEvent) {
    console.log(calendarEvent);
  }
  constructor() { }

  ngOnInit() {
  }

  test($event) {
    this.viewDate = $event;

    console.log($event.day.date.toString());

  }

}
