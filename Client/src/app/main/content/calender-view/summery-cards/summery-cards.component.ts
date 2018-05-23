import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetPatientsService} from "../../../get-patients.service";
import {Patient} from "../../../sidebar/planning/infoheader/Patient";
import {ProcedureService} from "../../../../http-api/procedure/procedure.service";
import {MaterialResponse} from "../../../../http-api/material/MaterialResponse";
import {BookingService} from "../../../../http-api/booking/booking.service";

import {
startOfDay,
endOfDay,
subDays,
addDays,
endOfMonth,
isSameDay,
isSameMonth,
addHours,
  addMinutes
} from 'date-fns';
import {
  CalendarEvent
} from 'angular-calendar';
import {RoomResponse} from "../../../../http-api/room/RoomResponse";
import {RoomService} from "../../../../http-api/room/room.service";
import {BookingResponse} from '../../../../http-api/booking/BookingResponse';
import {forEach} from '@angular/router/src/utils/collection';
import {DecisionService} from '../../../../http-api/decision/decision.service';
import {StaffService} from '../../../../http-api/staff/staff.service';
import {StaffResponse} from '../../../../http-api/staff/StaffResponse';
import {BookingRoom} from '../../../../http-api/booking/BookingRoom';
import {BookingStaff} from '../../../../http-api/booking/BookingStaff';
import {BookingInfoService} from '../booking-info.service';
import {RoomBooking} from '../../../../http-api/room/RoomBooking';



@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {
  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];
  rooms: RoomResponse[] = [];
  staffList: StaffResponse[];
  currentRoom: RoomResponse;
  currentStaff: number;
  materialList = true;
  urgency: string;
  preliminary = false;
  bookedRoomName: string = 'NONE';
  bookedStaffName: string = 'NONE';
  room: RoomResponse;
  staff: StaffResponse;
  startDate: Date;
  endDate: Date;
  bookedStartDate: Date;
  bookedEndDate: Date;
  bookingStatus: string;
  currentStatus: boolean;
  selectedRoom;

  //Track vars
  locale: string = "sv";
  events: CalendarEvent[] = [];
  resourceSchedules: {[index: string]: CalendarEvent[]} = {};

  constructor(private gpService: GetPatientsService, private procService: ProcedureService, private bookService: BookingService, private roomService: RoomService, private desService: DecisionService, private staffService: StaffService, private bookingInfoService: BookingInfoService
  ) {
    this.getPatient();
    this.gpService.changedPatient.subscribe(() => {
      this.getPatient();
      if (this.patient != null) {
        this.getBookedRoom();
        this.getBookedStaff();
        this.getBookingStatus();
      }
    });
  }

  ngOnInit() {
    this.getProcedureMaterial(this.patient.procedures[0].kvåCode);
    if (this.patient.Bradskandegrad) {
      this.urgency = 'AKUT';
    } else {
      this.urgency = 'Elektiv';
    }

    this.startDate = new Date();
    this.endDate = new Date();

    if (this.bookingInfoService.roomId !== null) {
      this.endDate = this.bookingInfoService.endDate;
      this.startDate = this.bookingInfoService.startDate;
      this.bookedStartDate = this.bookingInfoService.startDate;
      this.bookedEndDate = this.bookingInfoService.endDate;
    }
    this.currentStatus = false;

    this.updateBookedTimes();

    /*this.startDate = new Date();
    this.endDate = addMinutes(this.startDate, (this.patient.procedures[0].operationTime));*/
    this.getBookedRoom();
    this.getBookedStaff();
    this.getBookingStatus();

    this.roomService.getRoomsByType(1).subscribe((rooms: RoomResponse[]) => {
      this.rooms = rooms;
      this.currentRoom = rooms[0];
      if (this.bookingInfoService.roomName !== null) {
        for (let i = 0; i < rooms.length; ++i) {
          if (rooms[i].name === this.bookingInfoService.roomName) {
            this.currentRoom = rooms[i];
            this.selectedRoom = this.currentRoom.name;
            break;
          }
        }
      }
    });

    this.staffService.getAllStaff().subscribe((staff: StaffResponse[]) => {
      this.staffList = staff;
      this.currentStaff = this.staffList[0].id;
    });
  }

  setCurrentRoom() {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name === this.selectedRoom) {
        this.currentRoom = this.rooms[i];
      }
    }
  }

  setCurrentStaff(staffName: string) {
    for (let i = 0; i < this.staffList.length; i++) {
      if (this.staffList[i].firstname + ' ' + this.staffList[i].lastname === staffName) {
        this.currentStaff = this.staffList[i].id; } }
  }

  setCurrentStatus(status: string) {
    if (status === 'Slutgiltig') {
      this.currentStatus = false;
    } else if (status === 'Preliminär') {
      this.currentStatus = true;
    }
  }

  updateBookedTimes() {
    if (this.patient && this.patient.booking) {
      this.bookService.getBookedRooms(this.patient.booking.id).subscribe((bookResponse: BookingRoom[]) => {
        this.roomService.getRoom(bookResponse[0].id).subscribe((roomResponse: RoomResponse) => {
          this.roomService.getBookingsForRoom(roomResponse.id).subscribe((bookedRoom: RoomBooking[]) => {
            this.bookedStartDate = new Date(bookedRoom[0].Booked_local.start_time);
            this.bookedEndDate = new Date(bookedRoom[0].Booked_local.end_time);
          })
        })
      })
    }
  }

  getBookingStatus() {
    if (this.patient.booking) {
      if (this.patient.booking.preliminary) {
        this.bookingStatus = 'Preliminärbokad';
      } else {
        this.bookingStatus = 'Bokad';
      }
    } else {
      this.bookingStatus = 'Obokad';
    }
  }


  getPatient() {
    this.patient = this.gpService.currentPatient;
    if (this.patient && this.patient.booking) {
      this.updateBookedTimes();
    }
  }

  getBookedRoom() {
    if (this.patient.booking) {
      this.bookService.getBookedRooms(this.patient.booking.id).subscribe((response: BookingRoom[]) => {
        this.bookedRoomName = response[0].name;
      });
    }
  }

  getBookedStaff() {
    if (this.patient.booking) {
      this.bookService.getBookedStaff(this.patient.booking.id).subscribe( (response: BookingStaff[]) => {
        this.bookedStaffName = response[0].firstname + ' ' + response[0].lastname;
      });
    }
  }

  getProcedureMaterial(KVA: string)  {
    this.procService.getMaterialForProcedure(KVA).subscribe( (procedureMaterial: MaterialResponse[]) => {
      for (let i = 0; i < procedureMaterial.length; i++) {
        this.material.push(procedureMaterial[i]);
      }
    });
  }

  onFormSubmit() {
    if (this.patient.booking) {
      this.bookService.deleteBooking(this.patient.booking.id).subscribe(() => {
          this.makeBooking();
        }
      );
    } else {
      this.makeBooking();
    }
  }

  makeBooking(): void {
    this.bookService.createBooking(this.gpService.currentPatient.id, this.currentStatus).subscribe((response: BookingResponse) => {
      this.bookService.addRoomToBooking(response.id, this.currentRoom.id, this.startDate, this.endDate).subscribe();
      for (let i = 0; i < this.material.length; i++) {
        this.bookService.addMaterialToBooking(response.id, this.material[i].id, this.startDate, this.endDate).subscribe();
      }
      this.bookService.addStaffToBooking(response.id, this.currentStaff, this.startDate, this.endDate).subscribe();
      this.gpService.updateDecision(this.patient.id);
    });
  }

  unbook () {
    this.bookService.deleteBooking(this.patient.booking.id).subscribe(() => {
      this.gpService.updateDecision(this.patient.id);
      }
    );
  }
}

