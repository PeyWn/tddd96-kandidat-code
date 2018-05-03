import {Component, ComponentFactoryResolver, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CalendarDayViewComponent, CalendarUtils} from 'angular-calendar';

@Component({
  selector: 'app-day-track-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent extends CalendarDayViewComponent {
  @Input() title;
}
