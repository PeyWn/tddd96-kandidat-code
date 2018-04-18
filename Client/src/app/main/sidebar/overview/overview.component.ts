import {Component, OnInit, ViewChild} from '@angular/core';
import {DecisionsComponent} from "./decisions/decisions.component";
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild(DecisionsComponent) private desitions;

  constructor() { }

  ngOnInit() {
  }

  filterSearch($event:string) {
    this.desitions.iteratePatients($event);
  }

  recieveModifiers($event:string) {
    switch($event){
      case 'time': {this.desitions.sortByTime(); break;}
      case 'timeR': {this.desitions.sortByTimeReverse(); break;}
      default: break;
    }
  }

  filter($event:string) {
    this.desitions.filterPatients($event);
  }

}
