import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private gpService: GetPatientsService, private procService: ProcedureService, private eventService: BookingService, private roomService: RoomService
  ) {
    this.patient = this.getPatient();
  }

  ngOnInit() {
    this.getProcedureMaterial(this.getPatient().KVA);
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
    //this.eventService.createBooking(1, this.preliminary);
    //this.eventService.addRoomToBooking(1, this.currentRoom, this.startDate, this.endDate);
  }
}
