
  import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, ViewEncapsulation
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
    CalendarEventTimesChangedEvent
  } from 'angular-calendar';

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
    styleUrls: ['./calender-view.component.css']
  })
  export class CalenderViewComponent{

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    combineEvents() {
      this.events = this.eventsNew;
    }

    setRooms() {
      this.events = this.rooms;
    }
    setDoctors() {
      this.events = this.surgeons;
    }
    view = 'month';

    viewDate: Date = new Date();
    modalData: {
      action: string;
      event: CalendarEvent;
    };

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
    rooms:CalendarEvent[] = [
      {
        start: addHours(startOfDay(new Date()), 3),
        end: addHours(startOfDay(new Date()), 14),
        title: 'Sal1',
        color: colors.blue,
        actions: this.actions,
      },

      {
        start: addHours(startOfDay(new Date()), 7),
        end: addHours(startOfDay(new Date()), 9),
        title: 'Sal2',
        color: colors.red,
        actions: this.actions,
      }
    ];
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

    events:CalendarEvent[] = this.rooms;


    eventsNew: CalendarEvent[] = []

    eventOverlap(event1:CalendarEvent, event2:CalendarEvent) : CalendarEvent{
      let start1 = event1.start.getHours();
      let start2 = event2.start.getHours();
      let end1 = event1.end.getHours();
      let end2 = event2.end.getHours();
      let title1 = event1.title;
      let title2 = event2.title;
      let newTitle = title1 + ' och ' + title2;



      if (start1 < start2){
        if (end1 < end2) {
          let test: CalendarEvent = {start: addHours(startOfDay(new Date()), start2), end: addHours(startOfDay(new Date()), end1),title: newTitle, color: colors.yellow};
          return test;
        } else {
          let test: CalendarEvent = {start: addHours(startOfDay(new Date()), start2), end: addHours(startOfDay(new Date()), end2),title: newTitle, color: colors.yellow};
          return test;}
      } else {
        if (end1 < end2) {
        let test: CalendarEvent = {start: addHours(startOfDay(new Date()), start1), end: addHours(startOfDay(new Date()), end1),title: newTitle, color: colors.yellow};
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


    activeDayIsOpen = true;

    constructor(private modal: NgbModal) {}

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

    eventTimesChanged({
                        event,
                        newStart,
                        newEnd
                      }: CalendarEventTimesChangedEvent): void {
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
    setupCombination(events1:CalendarEvent[], events2:CalendarEvent[]) {
      let eventCopy1:CalendarEvent[] = Object.assign([],events1);
      let eventCopy2:CalendarEvent[] = Object.assign([], events2);
      for (let i = eventCopy1.length; i > 0; i--){
        for (let j = eventCopy2.length;j > 0;j--) {
          this.eventsNew.push(this.eventOverlap(eventCopy1[i - 1], eventCopy2[j - 1]))
        }
      }

    }
    ngOnInit() {
      this.setupCombination(this.rooms, this.surgeons)
    }
  }
