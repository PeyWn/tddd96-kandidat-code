
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, ViewEncapsulation, OnInit, ViewContainerRef, ComponentFactory, ComponentRef, ComponentFactoryResolver
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import {DayViewComponent} from '../day-view/day-view.component';
import * as events from 'events';
import {RoomService} from '../../../http-api/room/room.service';
import {RoomResponse} from '../../../http-api/room/RoomResponse';
import {RoomBooking} from '../../../http-api/room/RoomBooking';

const colors: any = {
  red: {
    primary: '#dabdab',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css'],

  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalenderViewComponent implements OnInit {
  roomEvents: {[index: string]: CalendarEvent[]} = {};
  rooms: RoomResponse[];
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('dayView', { read: ViewContainerRef}) container;

  view: string = 'month';

  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  // Language fix
  locale: string = 'sv';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;



  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  refresh: Subject<any> = new Subject();
  surgeons: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(new Date()), 17),
      title: 'Dr Björn',
      color: colors.red,
      actions: this.actions,
    },
    {
      start: addHours(startOfDay(new Date()), 1),
      end: addHours(startOfDay(new Date()), 10),
      title: 'Dr Tor',
      color: colors.yellow,
      actions: this.actions,
    }
  ];

  events: CalendarEvent[];
  eventsNew: CalendarEvent[] = [];

  activeDayIsOpen = true;


  createResourceTrack(events: CalendarEvent[], title: string) {
    const factory: ComponentFactory<DayViewComponent> = this.resolver.resolveComponentFactory(DayViewComponent);
    const componentRef: ComponentRef<DayViewComponent> = this.container.createComponent(factory);
    componentRef.instance.events = events;
    componentRef.instance.title = title;
    componentRef.instance.viewDate = this.viewDate;
  }

  updateRooms($event, room: RoomResponse) {
    if($event.target.checked){
      this.roomEvents[room.name] = [];
      this.roomService.getBookingsForRoom(room.id).subscribe((bookings: RoomBooking[])=> {
        for(let i = 0; i < bookings.length; i++) {
          console.log(bookings[i].Booked_local);
          console.log(this.roomEvents);
          this.roomEvents[room.name] = [{start: new Date(bookings[i].Booked_local.start_time),
            end: new Date(bookings[i].Booked_local.end_time),
            title: 'hej',
            color: colors.blue,
            actions: this.actions}];
        }
        this.listRoomEvents();
      });
    } else {
      delete this.roomEvents[room.name];
      this.listRoomEvents();
    }
  }

  listRoomEvents() {
    this.container.clear();
    for(let key in this.roomEvents){
      this.createResourceTrack(this.roomEvents[key], key);
    }
    // for(let i = 0; i < this.roomEvents.length; i++) {
    //   this.createResourceTrack(this.roomEvents[i]);
    // }
  }


  eventOverlap(event1: CalendarEvent, event2: CalendarEvent): CalendarEvent {
    let start1 = event1.start.getHours();
    let start2 = event2.start.getHours();
    let end1 = event1.end.getHours();
    let end2 = event2.end.getHours();
    let title1 = event1.title;
    let title2 = event2.title;
    let newTitle = title1 + ' och ' + title2;

    if (start1 < start2) {
      if (end1 < end2) {
        let test: CalendarEvent = {
          start: addHours(startOfDay(new Date()), start2),
          end: addHours(startOfDay(new Date()), end1),
          title: newTitle,
          color: colors.yellow
        };
        return test;
      } else {
        let test: CalendarEvent = {
          start: addHours(startOfDay(new Date()), start2),
          end: addHours(startOfDay(new Date()), end2),
          title: newTitle,
          color: colors.yellow
        };
        return test;
      }
    } else {
      if (end1 < end2) {
        let test: CalendarEvent = {
          start: addHours(startOfDay(new Date()), start1),
          end: addHours(startOfDay(new Date()), end1),
          title: newTitle,
          color: colors.yellow
        };
        return test;
      } else {
        let test: CalendarEvent = {
          start: addHours(startOfDay(new Date()), start1),
          end: addHours(startOfDay(new Date()), end2),
          title: newTitle,
          color: colors.yellow
        };
        return test;
      }
    }
  }

  constructor(private modal: NgbModal, private resolver: ComponentFactoryResolver, private roomService: RoomService) {}


  close() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
  setupCombination(events1: CalendarEvent[], events2: CalendarEvent[]) {
    let eventCopy1: CalendarEvent[] = Object.assign([], events1);
    let eventCopy2: CalendarEvent[] = Object.assign([], events2);
    for (let i = eventCopy1.length; i > 0; i--) {
      for (let j = eventCopy2.length; j > 0; j--) {
        this.eventsNew.push(this.eventOverlap(eventCopy1[i - 1], eventCopy2[j - 1]));
      }
    }
  }
  ngOnInit() {
    //this.setupCombination(this.rooms, this.surgeons);
    this.roomService.getRoomsByType(1).subscribe((rooms: RoomResponse[])=>{
      this.rooms = rooms;
    })
  }
}
