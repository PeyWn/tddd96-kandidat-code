import { Component, OnInit } from '@angular/core';
import {Patient} from './Patient';

@Component({
  selector: 'app-infoheader',
  templateUrl: './infoheader.component.html',
  styleUrls: ['./infoheader.component.css'],
  inputs: ['patient']
})
export class InfoheaderComponent implements OnInit {

  patient:Array<Patient>;

  constructor() {
    this.patient = [
      new Patient("Tor", 902391, "hickar för mycket", "BE321"),
      new Patient("Björn", 900000, "Magont", "BE312")
    ]
  }
  ngOnInit() {
  }

}
