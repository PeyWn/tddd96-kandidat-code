
import {
  Component,
  ViewChild,
  TemplateRef, ViewEncapsulation, OnInit, ComponentFactoryResolver
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
  DAYS_OF_WEEK,
  CalendarMonthViewDay
} from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import {DayViewComponent} from '../day-view/day-view.component';
import {RoomService} from '../../../http-api/room/room.service';
import {RoomResponse} from '../../../http-api/room/RoomResponse';
import {RoomBooking} from '../../../http-api/room/RoomBooking';
import {GetPatientsService} from '../../get-patients.service';
import { SidebarPanelService} from '../../sidebar/sidebar-panel.service';
import {Patient} from '../../sidebar/planning/infoheader/Patient';
import {ProcedureService} from '../../../http-api/procedure/procedure.service';
import {forEach} from '@angular/router/src/utils/collection';
import {DecisionService} from '../../../http-api/decision/decision.service';
import {DecisionResponse} from '../../../http-api/decision/DecisionResponse';
import {GetCalendarFiltersService} from '../../get-calendar-filters.service';
import {ProcedureResponse} from '../../../http-api/procedure/ProcedureResponse';

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
  encapsulation: ViewEncapsulation.None,

  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalenderViewComponent implements OnInit {
  // Set upp for room selection list and track
  roomEvents: {[index: string]: {events: CalendarEvent[], roomId: number}} = {};
  rooms: {[index: string]: RoomResponse} = {};
  roomMap: {[index: string]: boolean} = {};

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  // What view is default
  view: string = 'month';

  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  // Language fix
  locale: string = 'sv';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  currentPatient: Patient;

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

  // Events, not used for track view but all other views
  events: CalendarEvent[] = [];
  eventsNew: CalendarEvent[] = [];

  activeDayIsOpen = false;

  // Hamdles the rendering of last day
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    if (this.currentPatient)  {
    body.forEach(day => {
      if (day.date.getMonth() > this.currentPatient.Tid.getMonth() ||
         (day.date.getDate() > this.currentPatient.Tid.getDate() &&
          day.date.getMonth() === this.currentPatient.Tid.getMonth())) {
        day.cssClass = 'odd-cell';
      }
    });
    }
  }

  refreshView() {
    this.refresh.next();
    console.log(this.currentPatient);
    console.log('REFRESH');
  }

  combineEvents() {
    this.events = this.eventsNew;
  }

  // Called when room selection is changed
  updateRooms($event, room: string): void {
    if (!this.roomMap[room]) {
      this.roomMap[room] = true;
      delete this.roomEvents[room];

      if(this.gpService.currentPatient == null){
        this.setRoomFilter(this.rooms[room], true);
      }
      // If no decision is selected decision list should be filterd
      this.getTrack(this.rooms[room]);
    } else {
      this.roomMap[room] = false;
      delete this.roomEvents[room];

      // Remove filters if no decision is selected
      if(this.gpService.currentPatient == null){
        this.setRoomFilter(this.rooms[room], false);
      }
    }
    this.refresh.next();
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

  getPatient() {
    this.currentPatient = this.gpService.currentPatient;
  }


  constructor(private modal: NgbModal,
              private gpService: GetPatientsService,
              private spService: SidebarPanelService,
              private resolver: ComponentFactoryResolver,
              private roomService: RoomService,
              private procedureService: ProcedureService,
              private decisionService: DecisionService,
              private gcfService: GetCalendarFiltersService) {
    this.gpService.changedPatient.subscribe( () => {
      this.getPatient();
      console.log(this.currentPatient);
      if (!this.currentPatient){
        this.view = 'month';
      }
      this.refreshView();

      // Load rooms
      if (this.currentPatient != null) {
        this.getRoomsByKva(this.currentPatient.procedures[0].kvåCode);
      } else {
        this.getAllRooms();
      }
    });
  }

  close() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
    this.view = 'day';
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

  private getAllRooms(): void {
    this.roomService.getRoomsByType(1).subscribe((rooms: RoomResponse[]) => {
      this.roomEvents = {};
      this.rooms = {};
      this.roomMap = {};
      for (let room of rooms) {
        this.roomMap[room.name] = false;
        this.rooms[room.name] = room;
      }
    });
  }

  private getRoomsByKva(kva: string): void {
    this.procedureService.getRoomsWithProcedure(kva).subscribe((rooms: RoomResponse[]) => {
      this.roomEvents = {};
      this.rooms = {};
      this.roomMap = {};
      for (let room of rooms) {
        console.log('skapar track ' + room.name);
        this.roomMap[room.name] = true;
        this.rooms[room.name] = room;
        this.getTrack(room);
      }
    });
  }

  private getTrack(room: RoomResponse): void {
    console.log('getTrack ' + room.name);
    this.roomService.getBookingsForRoom(room.id).subscribe((bookings: RoomBooking[]) => {
      this.roomEvents[room.name] = {events: [], roomId: room.id};
        for (let i = 0; i < bookings.length; i++) {
          console.log(bookings[i].Booked_local);
          console.log(this.roomEvents);
          this.decisionService.getDecision(bookings[i].DecisionId).subscribe((decision: DecisionResponse) => {
            this.roomEvents[room.name].events.push({start: new Date(bookings[i].Booked_local.start_time),
              end: new Date(bookings[i].Booked_local.end_time),
              title: decision.PatientSsn,
              color: colors.blue,
              actions: this.actions});
          });
        }
    });
  }

  private setRoomFilter(room: RoomResponse, enable: Boolean) {
    if(enable){
      this.roomService.getProceduresFromRoom(room.id).subscribe((procedures: ProcedureResponse[]) => {
        this.gcfService.addProcedures(procedures);
      });
    } else {
      this.roomService.getProceduresFromRoom(room.id).subscribe((procedures: ProcedureResponse[]) => {
          this.gcfService.deleteProcedures(procedures);
        });
    }
  }

  ngOnInit() {
    // this.setupCombination(this.rooms, this.surgeons);
    this.getAllRooms();
  }

}
