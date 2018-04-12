import { Component, OnInit } from '@angular/core';
import {SidebarPanelService} from './sidebar-panel.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  getPanel() {
    return this.spService.getCurrentPanel();
  }

  constructor(private spService: SidebarPanelService) { }

  ngOnInit() {
  }

}
