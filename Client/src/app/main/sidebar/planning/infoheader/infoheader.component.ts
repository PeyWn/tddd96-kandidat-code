import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from '../../../get-patients.service';
import {Patient} from './Patient';

@Component({
  selector: 'app-infoheader',
  templateUrl: './infoheader.component.html',
  styleUrls: ['./infoheader.component.css']
})
export class InfoheaderComponent implements OnInit {
  @Input() patient:Patient;
  getPatient() {
    return this.gpService.currentPatient;
  }
  constructor(private gpService:GetPatientsService ) {
  }
  ngOnInit() {
  }

}
