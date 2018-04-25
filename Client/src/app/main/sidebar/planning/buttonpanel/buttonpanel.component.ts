import { Component, OnInit } from '@angular/core';
import {SidebarPanelService} from '../../sidebar-panel.service';

@Component({
  selector: 'app-buttonpanel',
  templateUrl: './buttonpanel.component.html',
  styleUrls: ['./buttonpanel.component.css']
})
export class ButtonpanelComponent implements OnInit {
  setPanel(charmander) {this.spService.setCurrentPanel(charmander); }

  constructor(private spService: SidebarPanelService) { }

  ngOnInit() {
  }
}
