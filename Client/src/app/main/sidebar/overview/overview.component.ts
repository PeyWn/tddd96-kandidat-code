import {Component, OnInit, ViewChild} from '@angular/core';
import {DecisionsComponent} from './decisions/decisions.component';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild(DecisionsComponent) private decisions;

  constructor() { }

  ngOnInit() {
  }

  filterSearch(searchTerm: string): void {
    this.decisions.searchList(searchTerm);
  }

  recieveModifiers($event: string): void {
    switch ($event) {
      case 'time': {this.decisions.sortByTime(); break; }
      case 'timeR': {this.decisions.sortByTimeReverse(); break; }
      default: break;
    }
  }

  filter($event: Array<any>): void {
    this.decisions.filterList($event);
  }

}
