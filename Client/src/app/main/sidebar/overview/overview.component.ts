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

  filterSearch($event: Array<any>): void {
    this.decisions.searchList($event);
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
