import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from '../../../get-patients.service';
import {SidebarPanelService} from '../../sidebar-panel.service';
import {Patient} from './Patient';

@Component({
  selector: 'app-infoheader',
  templateUrl: './infoheader.component.html',
  styleUrls: ['./infoheader.component.css']
})
export class InfoheaderComponent implements OnInit {
  @Input() patient: Patient;
  urgency: string;
  time: string;
  setPanel(newPanel: string): void {
    this.spService.setCurrentPanel(newPanel);
  }
  getPatient(): Patient {
    return this.gpService.currentPatient;
  }
  setPatient(newPatient: Patient): void {
    this.gpService.currentPatient = newPatient;

  }
  constructor(private gpService: GetPatientsService, private spService: SidebarPanelService) {
    this.patient = this.getPatient();
  }
  ngOnInit() {
    if (this.patient.Bradskandegrad) {
      this.urgency = 'AKUT';
    } else {
      this.urgency = 'Elektiv';
    }

    let startDate = new Date().getTime();
    let endDate = this.patient.Tid.getTime();
    let timeToEnd = endDate - startDate;
    if (timeToEnd < 0) {
      this.time = 'Passerat!';
    } else {
      let days = Math.floor(timeToEnd / (1000 * 3600 * 24));
      let hours = Math.floor(timeToEnd / (1000 * 3600));
      let minutes = Math.floor(timeToEnd / (1000 * 60));

      if (hours <= 2) {
        this.time = 'Minuter: ' + (minutes - days * 24 * 60);
      } else if (hours <= 48) {
        this.time = 'Timmar: ' + hours + '\nMinuter: ' + (minutes - hours * 60);
      } else {
        this.time = 'Dagar: ' + days + '\nTimmar: ' + (hours - days * 24);
      }
   }
  }

}
