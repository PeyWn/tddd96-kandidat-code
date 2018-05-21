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



@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {
  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];
  rooms: RoomResponse[];
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
  dr: string;
  title: string;
  startDate: Date;
  endDate: Date;
  bookingStatus: string;
  currentStatus: boolean;

  constructor(private gpService: GetPatientsService, private procService: ProcedureService, private bookService: BookingService, private roomService: RoomService, private desService: DecisionService, private staffService: StaffService
  ) {
    this.patient = this.getPatient();
    this.gpService.changedPatient.subscribe(() => {
      this.patient = this.getPatient();
      this.getBookedRoom();
      this.getBookedStaff();
      this.getBookingStatus();
    })
  }

  ngOnInit() {
    this.getProcedureMaterial(this.getPatient().procedures[0].kvåCode); //TODO: There can be multiple procedures
    if (this.patient.Bradskandegrad) {
      this.urgency = 'AKUT';
    } else {
      this.urgency = 'Elektiv';
    }
    this.startDate = new Date();
    this.endDate = addMinutes(this.startDate, (this.patient.procedures[0].operationTime));
    this.title = 'Åtgärd (TODO) \n' + this.patient.Namn + '\n Doktor';

    this.getBookedRoom();
    this.getBookedStaff();
    this.getBookingStatus();

    this.roomService.getRoomsByType(1).subscribe((rooms: RoomResponse[])=>{
      this.rooms = rooms;
      this.currentRoom = rooms[0];

    });

    this.staffService.getAllStaff().subscribe((staff: StaffResponse[]) => {
      this.staffList = staff;
      this.currentStaff = this.staffList[0].id;
    })
    }
    setCurrentRoom(roomNum: string ) {
       for (let i = 0; i < this.rooms.length; i++) {
         if (this.rooms[i].name === roomNum) {
            this.currentRoom = this.rooms[i]; } }
  }

  setCurrentStaff(staffName: string) {
    for (let i = 0; i < this.staffList.length; i++) {
      if (this.staffList[i].firstname + ' ' + this.staffList[i].lastname === staffName) {
        this.currentStaff = this.staffList[i].id; } }
  }

  setCurrentStatus(status: string){
    if (status === 'Slutgiltig') {
      this.currentStatus = true;
    } else if (status === 'Preliminär') {
      this.currentStatus = false;
    }
  }

  getBookingStatus() {
    if (this.patient.booking) {
      if (this.patient.booking.preliminary) {
        this.bookingStatus = 'Bokad';
      } else {
        this.bookingStatus = 'Preliminärbokad';
      }
    } else {
      this.bookingStatus = 'Obokad';
    }
  }


  getPatient(): Patient {
    return this.gpService.currentPatient;
  }

  getBookedRoom() {
    if (this.patient.booking) {
      this.bookService.getBookedRooms(this.patient.booking.id).subscribe((response: BookingRoom[]) =>{
        this.bookedRoomName = response[0].name;
      });
    }
  }

  getBookedStaff() {
    if (this.patient.booking) {
      this.bookService.getBookedStaff(this.patient.booking.id).subscribe( (response: BookingStaff[]) => {
        this.bookedStaffName = response[0].firstname + ' ' + response[0].lastname;
      })
    }
  }

  getProcedureMaterial(KVA: string)  {
    this.procService.getMaterialForProcedure(KVA).subscribe( (procedureMaterial: MaterialResponse[]) => {
      for (let i = 0; i < procedureMaterial.length; i++) {
        this.material.push(procedureMaterial[i]);
      }
    });
  }



  onFormSubmit () {
    this.bookService.createBooking(this.gpService.currentPatient.id, this.currentStatus).subscribe((response: BookingResponse) =>{
      this.bookService.addRoomToBooking(response.id, this.currentRoom.id, this.startDate, this.endDate).subscribe();
      for(let i = 0; i < this.material.length; i++){
        this.bookService.addMaterialToBooking(response.id, this.material[i].id, this.startDate, this.endDate).subscribe();
      }
      this.bookService.addStaffToBooking(response.id, this.currentStaff, this.startDate, this.endDate).subscribe();
      this.gpService.updateDecision(this.patient.id);
    });
  }
  unbook () {
    this.bookService.deleteBooking(this.patient.booking.id).subscribe(() => {
      this.gpService.updateDecision(this.patient.id);
      this.getPatient();
      }
    )
  }
}

