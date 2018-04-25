import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from './Patient';
import {Observable} from 'rxjs/Observable';
import {Decision} from '../decision/Decision';

@Injectable()
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>('/patient');
  }

  getPatient(ssn: string): Observable<Patient> {
    return this.httpClient.get<Patient>('/patient/' + ssn);
  }

  getDecisionsForPatient(ssn: string): Observable<Decision> {
    return this.httpClient.get<Decision>('/patient/' + ssn + '/decisions');
  }
}
