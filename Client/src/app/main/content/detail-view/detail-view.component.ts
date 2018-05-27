import {Component, Input, OnInit} from '@angular/core';
import {Patient} from './Patient';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() patient: Array<Patient>;

  constructor() {
    this.patient = [
      new Patient(901008, 'Tor', 'Hicka', 'hickar för mycket'),
      new Patient(991099, 'Björn', 'Magont', 'har ont i magen')
  ];
  }
  ngOnInit() {
  }

}
