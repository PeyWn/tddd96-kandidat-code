import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatientResponse} from './PatientResponse';
import {Observable} from 'rxjs/Observable';
import {DecisionResponse} from '../decision/DecisionResponse';

@Injectable()
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  getAllPatients(): Observable<PatientResponse[]> {
    return this.httpClient.get<PatientResponse[]>('/patient');
  }

  getPatient(ssn: string): Observable<PatientResponse> {
    return this.httpClient.get<PatientResponse>('/patient/' + ssn);
  }

  getDecisionsForPatient(ssn: string): Observable<DecisionResponse> {
    return this.httpClient.get<DecisionResponse>('/patient/' + ssn + '/decisions');
  }
}
