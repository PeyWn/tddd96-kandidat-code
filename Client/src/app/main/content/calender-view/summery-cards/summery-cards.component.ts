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
addHours
} from 'date-fns';
import {RoomResponse} from "../../../../http-api/room/RoomResponse";
import {RoomService} from "../../../../http-api/room/room.service";
import {BookingResponse} from '../../../../http-api/booking/BookingResponse';
import {forEach} from '@angular/router/src/utils/collection';
import {DecisionService} from '../../../../http-api/decision/decision.service';



@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {
  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];
  rooms: RoomResponse[];
  currentRoom;
  materialList = true;
  urgency: string;
  preliminary = false;
  room;
  dr: string;
  title: string;
  startDate: Date;
  endDate: Date;

  constructor(private gpService: GetPatientsService, private procService: ProcedureService, private bookService: BookingService, private roomService: RoomService, private desService: DecisionService
  ) {
    this.patient = this.getPatient();
  }

  ngOnInit() {
    this.getProcedureMaterial(this.getPatient().procedures[0].kvåCode); //TODO: There can be multiple procedures
    if (this.patient.Bradskandegrad) {
      this.urgency = 'AKUT';
    } else {
      this.urgency = 'Elektiv';
    }

    this.startDate = new Date();
    this.title = 'Åtgärd (TODO) \n' + this.patient.Namn + '\n Doktor';

    this.roomService.getRoomsByType(1).subscribe((rooms: RoomResponse[])=>{
      this.rooms = rooms;
      if (this.rooms) {this.currentRoom = this.rooms[0]; }

    });
    }
    setCurrentRoom(roomNum: string ) {
       for (let i = 0; i < this.rooms.length; i++) {
         if (this.rooms[i].name === roomNum) {
            this.currentRoom = this.rooms[i]; } }}

  getPatient(): Patient {
    return this.gpService.currentPatient;
  }
  getProcedureMaterial(KVA: string)  {
    this.procService.getMaterialForProcedure(KVA).subscribe( (procedureMaterial: MaterialResponse[]) => {
      for (let i = 0; i < procedureMaterial.length; i++) {
        this.material.push(procedureMaterial[i]);
      }
    });
  }

  onFormSubmit () {
    this.bookService.createBooking(this.gpService.currentPatient.id, this.preliminary).subscribe((response: BookingResponse) =>{
      this.bookService.addRoomToBooking(response.id, 2, this.startDate, this.endDate).subscribe();
      for(let i = 0; i < this.material.length; i++){
        this.bookService.addMaterialToBooking(response.id, this.material[i].id, this.startDate, this.endDate).subscribe();
      }
      this.bookService.addStaffToBooking(response.id, 1, this.startDate, this.endDate).subscribe();
      this.gpService.updateDecision(this.patient.id)
    });
  }
  unbook () {
    this.bookService.deleteBooking(this.patient.booking.id).subscribe(() => {
      this.gpService.updateDecision(this.patient.id);
      }
    );
  }
}

