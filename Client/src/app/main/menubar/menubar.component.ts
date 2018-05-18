import {Component, OnInit} from '@angular/core';
import {GetPatientsService} from '../get-patients.service';
import {SidebarPanelService} from '../sidebar/sidebar-panel.service';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  patient;
  updatePanel() {
    this.patient = this.gpService.currentPatient;
    return this.spService.getCurrentPanel();
  }

  constructor(
    private gpService: GetPatientsService,
    private spService: SidebarPanelService,
    public loginService: LoginService) {
  this.patient = this.gpService.currentPatient;
  }

  ngOnInit() {
  }

}
