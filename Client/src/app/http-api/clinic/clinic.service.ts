import { Injectable } from '@angular/core';
import {ClinicResponse} from './ClinicResponse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DecisionResponse} from '../decision/DecisionResponse';
import {StaffResponse} from '../staff/StaffResponse';

@Injectable()
export class ClinicService {

  constructor(private httpClient: HttpClient) { }

  getAllClinics(): Observable<ClinicResponse[]> {
    return this.httpClient.get<ClinicResponse[]>('/clinic');
  }

  getClinic(id: number): Observable<ClinicResponse> {
    return this.httpClient.get<ClinicResponse>('/clinic/' + id);
  }

  getDecisionsByClinic(id: number): Observable<DecisionResponse[]> {
    return this.httpClient.get<DecisionResponse[]>('/clinic/' + id + '/decision');
  }

  getStaffFromClinic(id: number): Observable<StaffResponse[]> {
    return this.httpClient.get<StaffResponse[]>('/clinic/' + id + 'staff');
  }
}
