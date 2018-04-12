import { Injectable } from '@angular/core';
import {Patient} from './sidebar/planning/infoheader/Patient';

@Injectable()
export class GetPatientsService {
  patients:Array<Patient>;
  currentPatient:Patient;

  constructor(){
    this.patients = [
      new Patient("Tor", 902391, "hickar för mycket", "BE321", "AKUT", 20),
      new Patient("Björn", 900000, "Magont", "BE312", "Elektiv", 200),
      new Patient("Kurt", 902110, "Malaria", "BE333", "AKUT", 15)
    ]
    this.currentPatient = new Patient("Tor", 902391, "hickar för mycket", "BE321", "AKUT", 20);
  }

}
