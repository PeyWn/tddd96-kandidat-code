import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from "../../../get-patients.service";
import {Patient} from "../../../sidebar/planning/infoheader/Patient";

@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {
  @Input() patient: Patient;

  constructor(private gpService: GetPatientsService) {
    this.patient = this.getPatient();
  }
  ngOnInit() {
  }

  getPatient(): Patient {
    return this.gpService.currentPatient;
  }

}
