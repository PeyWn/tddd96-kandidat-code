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
  @Input() patient:Patient;
  setPanel(newPanel) {
    this.spService.setCurrentPanel(newPanel);
  }
  getPatient() {
    return this.gpService.currentPatient;
  }
  setPatient(newPatient){
    this.gpService.currentPatient = newPatient;
  }
  constructor(private gpService:GetPatientsService, private spService:SidebarPanelService) {
    this.patient = this.getPatient();
  }
  ngOnInit() {
  }

}
