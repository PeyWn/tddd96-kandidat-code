import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from '../../get-patients.service';
import {Patient} from './infoheader/Patient';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  @Input() patient:Patient;

  constructor(private gpService:GetPatientsService) {
    this.patient = this.getPatient();
  }
  ngOnInit() {
  }

  getPatient() {
    return this.gpService.currentPatient;
  }

}
