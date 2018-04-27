import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StaffResponse} from './StaffResponse';
import {DecisionResponse} from '../decision/DecisionResponse';
import {FreeTime} from '../freeTime/FreeTime';
import {StaffBooking} from './StaffBooking';

@Injectable()
export class StaffService {

  constructor(private httpClient: HttpClient) {
  }

  getAllStaff(): Observable<StaffResponse[]> {
    return this.httpClient.get<StaffResponse[]>('/staff');
  }

  getStaff(id: number): Observable<StaffResponse> {
    return this.httpClient.get<StaffResponse>('/staff/' + id);
  }

  getDecisionsByStaff(id: number): Observable<DecisionResponse[]> {
    return this.httpClient.get<DecisionResponse[]>('/staff/' + id + '/decision');
  }

  getWorkingTimesForStaff(id: number): Observable<FreeTime[]> {
    return this.httpClient.get<FreeTime[]>('/staff/' + id + '/available');
  }

  getBookingsForStaff(id: number): Observable<StaffBooking[]> {
    return this.httpClient.get<StaffBooking[]>('/staff/' + id + '/booked');
  }
}
