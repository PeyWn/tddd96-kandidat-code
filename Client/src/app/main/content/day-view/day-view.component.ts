import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnChanges
} from '@angular/core';
import {
  CalendarDayViewComponent,
  CalendarUtils,
  CalendarEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
import {DayViewHour, DayViewHourSegment} from 'calendar-utils';
import {FreeTime} from '../../../http-api/freeTime/FreeTime';
import {RoomService} from '../../../http-api/room/room.service';
import {RoomResponse} from '../../../http-api/room/RoomResponse';

@Component({
  selector: 'app-day-track-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent extends CalendarDayViewComponent implements OnInit, OnChanges {
  @Input() title;
  @Input() resourceSchedules: {[index: string]: {events: CalendarEvent[], roomId: number}} = {};

  openRoomTimes: Array<Array<FreeTime>>;

  constructor(private roomService: RoomService,
              ref: ChangeDetectorRef,
              utils: CalendarUtils) {
    super(ref, utils, 'sv');
    this.openRoomTimes = new Array<Array<FreeTime>>();
  }

  ngOnInit() {
    this.roomService.getAllRooms().subscribe((rooms: RoomResponse[]) => {
      for (let i = 0; i < rooms.length; ++i) {
        this.roomService.getOpenTimesForRoom(rooms[i].id).subscribe((freeTimes: FreeTime[]) => {
          this.openRoomTimes[rooms[i].id] = freeTimes;
          this.refresh.next();
        });
      }
    });
  }

  ngOnChanges(changes: any): void {
    this.refresh.next();
    super.ngOnChanges(changes);
  }

  dayMatches(dayNum: number, dayStr: string) {
    switch (dayNum) {
      case 1: return dayStr === 'mån';
      case 2: return dayStr === 'tis';
      case 3: return dayStr === 'ons';
      case 4: return dayStr === 'tor';
      case 5: return dayStr === 'fre';
      case 6: return dayStr === 'lör';
      case 7: return dayStr === 'sön';
    }
  }

  clockStringToMinutes(clock: string): number {
    let first = clock.indexOf(':');
    let last = clock.lastIndexOf(':');
    let minutes: number = 0;
    minutes += 60 * Number(clock.substr(0, 2));
    minutes += Number(clock.substring(first + 1, last));
    return minutes;
  }

  beforeDayViewRender(event: CalendarDayViewBeforeRenderEvent, roomId: number): void {
    if (this.openRoomTimes[roomId] == null) { return; }
    let openTime: FreeTime = null;
    for (let i = 0; i < this.openRoomTimes[roomId].length; ++i) {
      if (this.dayMatches(this.viewDate.getDay(), this.openRoomTimes[roomId][i].weekday)) {
        openTime = this.openRoomTimes[roomId][i];
      }
    }
    if (openTime === null) {
      openTime = new FreeTime();
      openTime.start_time = '00:00:00';
      openTime.end_time = '00:00:00';
    }
    event.body.hourGrid.forEach((hour: DayViewHour) => {
      hour.segments.forEach((segment: DayViewHourSegment) => {
        if (segment.date.getMinutes() + segment.date.getHours() * 60 < this.clockStringToMinutes(openTime.start_time) ||
            segment.date.getMinutes() + 30 + segment.date.getHours() * 60 > this.clockStringToMinutes(openTime.end_time)) {
          segment.cssClass = 'odd-hour-segment';
        }
      });
    });
  }
}
