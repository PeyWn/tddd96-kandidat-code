import { Component, OnInit } from '@angular/core';
import {SidebarPanelService} from '../../sidebar-panel.service';
import {GetPatientsService} from '../../../get-patients.service';
import {Patient} from '../infoheader/Patient';

@Component({
  selector: 'app-buttonpanel',
  templateUrl: './buttonpanel.component.html',
  styleUrls: ['./buttonpanel.component.css']
})
export class ButtonpanelComponent implements OnInit {
  setPanel(charmander) {this.spService.setCurrentPanel(charmander); }
  resetPatient() {
    this.gpService.setPatient(undefined);
  }

  constructor(private spService: SidebarPanelService, private gpService: GetPatientsService) { }

  ngOnInit() {
  }
}
