import {Component, ComponentFactoryResolver, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
  @Input() viewDate = new Date();
  @Input() events;
  @Input() title;
  constructor() {}


  ngOnInit() {
  }

}
