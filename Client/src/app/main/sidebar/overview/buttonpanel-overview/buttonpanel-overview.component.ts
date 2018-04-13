import { Component, OnInit } from '@angular/core';
import {SidebarPanelService} from '../../sidebar-panel.service';
@Component({
  selector: 'app-buttonpanel-overview',
  templateUrl: './buttonpanel-overview.component.html',
  styleUrls: ['./buttonpanel-overview.component.css']
})
export class ButtonpanelOverviewComponent implements OnInit {
  searchTxt;
  search() {
  }
  constructor(private spService: SidebarPanelService) { }

  ngOnInit() {
  }
}
