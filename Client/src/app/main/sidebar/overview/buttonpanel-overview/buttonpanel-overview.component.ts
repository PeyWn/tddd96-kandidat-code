import { Component, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-buttonpanel-overview',
  templateUrl: './buttonpanel-overview.component.html',
  styleUrls: ['./buttonpanel-overview.component.css']
})
export class ButtonpanelOverviewComponent implements OnInit {

  searchTxt;

  @Output() listModifiers = new EventEmitter<string>();
  @Output() searchMessage = new EventEmitter<string>();
  @Output() filterMessage = new EventEmitter<string>();

  sort(criterion: string) {
    this.listModifiers.emit(criterion);
  }

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchMessage.emit(this.searchTxt);
  }

  filter(category: string) {
    this.filterMessage.emit(category);
  }
}
