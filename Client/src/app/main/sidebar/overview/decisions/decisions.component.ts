import { Component, OnInit } from '@angular/core';
import { GetPatientsService} from '../../../get-patients.service';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})
export class DecisionsComponent implements OnInit {
  decisionList = this.gpService.patients;
  setPatient(newPatient) {
    this.gpService.currentPatient = newPatient;
  }
  constructor(private gpService: GetPatientsService) {}

  ngOnInit() {
  }

}
