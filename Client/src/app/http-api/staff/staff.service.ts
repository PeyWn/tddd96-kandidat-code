import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Staff} from './Staff';
import {Decision} from '../decision/Decision';
import {FreeTime} from '../freeTime/FreeTime';

@Injectable()
export class StaffService {

  constructor(private httpClient: HttpClient) {
  }

  getAllStaff(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>('/staff');
  }

  getStaff(id: number): Observable<Staff> {
    return this.httpClient.get<Staff>('/staff/' + id);
  }

  getDecisionsByStaff(id: number): Observable<Decision[]> {
    return this.httpClient.get<Decision[]>('/staff/' + id + '/decision');
  }

  getWorkingTimesForStaff(id: number): Observable<FreeTime[]> {
    return this.httpClient.get<FreeTime[]>('/staff/' + id + '/available/');
  }
}
