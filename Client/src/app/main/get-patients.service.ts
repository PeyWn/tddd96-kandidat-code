import { Injectable } from '@angular/core';
import {Patient} from './sidebar/planning/infoheader/Patient';

@Injectable()
export class GetPatientsService {
  patients: Array<Patient>;
  currentPatient: Patient;

  constructor() {
    this.patients = [
      new Patient('Tor', 902391, 'hickar för mycket', 'BE321', 'AKUT', 20, 'ABC123', 33, 24, 3, 'Jätteduktig', 'Sal 3'),
      new Patient('Björn', 900000, 'Magont', 'BE312', 'Elektiv', 200, 'ABC123', 33, 24, 3, 'Jätteduktig', 'Sal 3'),
      new Patient('Kurt', 902110, 'Malaria', 'BE333', 'AKUT', 15, 'ABC123', 33, 24, 3, 'Jätteduktig', 'Sal 3'),
      new Patient('Bert', 763817, 'Björn', 'DE433', 'AKUT', 10, 'ABC123', 33, 24, 3, 'Jätteduktig', 'Sal 3')
    ];
    this.currentPatient = new Patient('Tor', 902391, 'hickar för mycket', 'BE321', 'AKUT', 20, 'ABC123', 33, 24, 3, 'Jätteduktig', 'Sal 3');
  }

}
