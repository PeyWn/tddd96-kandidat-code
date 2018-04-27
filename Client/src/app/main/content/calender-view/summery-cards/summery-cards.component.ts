import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from "../../../get-patients.service";
import {Patient} from "../../../sidebar/planning/infoheader/Patient";
import {ProcedureService} from "../../../../http-api/procedure/procedure.service";
import {MaterialResponse} from "../../../../http-api/material/MaterialResponse";
import {BookingService} from "../../../../http-api/booking/booking.service";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

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



@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {

  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];
  materialList = true;
  urgency: string;
  preliminary = false;
  room;
  dr: string;
  title: string;
  startDate: Date;
  endDate: Date;

  constructor(private gpService: GetPatientsService, private procService: ProcedureService, private eventService: BookingService) {
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
  }

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
    //this.eventService.addRoomToBooking(1, this.room, this.startDate, this.endDate);
  }
}
