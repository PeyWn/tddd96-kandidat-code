import { Injectable } from '@angular/core';
import {Clinic} from './Clinic';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Decision} from '../decision/Decision';
import {Staff} from '../staff/Staff';

@Injectable()
export class ClinicService {

  constructor(private httpClient: HttpClient) { }

  getAllClinics(): Observable<Clinic[]> {
    return this.httpClient.get<Clinic[]>('/clinic');
  }

  getClinic(id: number): Observable<Clinic> {
    return this.httpClient.get<Clinic>('/clinic/' + id);
  }

  getDecisionsByClinic(id: number): Observable<Decision[]> {
    return this.httpClient.get<Decision[]>('/clinic/' + id + '/decision');
  }

  getStaffFromClinic(id: number): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>('/clinic/' + id + 'staff');
  }
}
