import { Component, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-buttonpanel-overview',
  templateUrl: './buttonpanel-overview.component.html',
  styleUrls: ['./buttonpanel-overview.component.css']
})
export class ButtonpanelOverviewComponent implements OnInit {
  akutChecked: boolean = false;
  elektivChecked: boolean = false;
  bokadChecked: boolean = false;
  prebokadChecked: boolean = false;
  obokadChecked: boolean = false;
  searchTxt;

  @Output() listModifiers = new EventEmitter<string>();
  @Output() searchMessage = new EventEmitter<Array<any>>();
  @Output() filterMessage = new EventEmitter<Array<any>>();

  filterParams: Array<any> = [this.akutChecked, this.elektivChecked, this.searchTxt];

  sort(criterion: string) {
    this.listModifiers.emit(criterion);
  }

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchMessage.emit(this.searchTxt);
  }


  filter(category: string, filterType: boolean) {
    let filterArray = [category, filterType];
    this.filterMessage.emit(filterArray);
}
}
