import {Component, ComponentFactoryResolver, OnInit, Input, ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CalendarDayViewComponent, CalendarUtils, CalendarEvent} from 'angular-calendar';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-day-track-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent extends CalendarDayViewComponent {
  @Input() title;
  @Input() resourceSchedules: {[index: string]: CalendarEvent[]} = {};

  ngOnChanges(changes: any): void {
    if(changes.resourceSchedules) {
      // validate(this.resourceSchedules);
      this.refresh.next();
    }
    super.ngOnChanges(changes);
  }

}
