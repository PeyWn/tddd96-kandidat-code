import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from '../../../get-patients.service';

@Component({
  selector: 'app-infoheader',
  templateUrl: './infoheader.component.html',
  styleUrls: ['./infoheader.component.css']
})
export class InfoheaderComponent implements OnInit {
  patient = this.getPatient();
  getPatient() {
    return this.gpService.currentPatient;
  }
  constructor(private gpService:GetPatientsService ) {
  }
  ngOnInit() {
  }

}
