import {Component, OnInit, EventEmitter, ViewChild} from '@angular/core';
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

  filterSearch($event) {
    this.desitions.iteratePatients($event);
  }

}
