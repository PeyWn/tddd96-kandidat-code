import { Component, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-buttonpanel-overview',
  templateUrl: './buttonpanel-overview.component.html',
  styleUrls: ['./buttonpanel-overview.component.css']
})
export class ButtonpanelOverviewComponent implements OnInit {

  searchTxt;

  @Output() searchMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchMessage.emit(this.searchTxt);
  }
}
