import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DecisionResponse} from './DecisionResponse';
import {Observable} from 'rxjs/Observable';
import {ProcedureResponse} from '../procedure/ProcedureResponse';
import {BookingResponse} from '../booking/BookingResponse';


@Injectable()
export class DecisionService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDecisions(): Observable<DecisionResponse[]> {
    return this.httpClient.get<DecisionResponse[]>('/decision');
  }

  getDecision(id: number): Observable<DecisionResponse> {
    return this.httpClient.get<DecisionResponse>('/decision/' + id);
  }

  getProceduresForDecision(decisionId: number): Observable<ProcedureResponse[]> {
    return this.httpClient.get<ProcedureResponse[]>('/decision/' + decisionId + '/procedures');
  }

  getBookingForDecision(decisionId: number): Observable<BookingResponse> {
    return this.httpClient.get<BookingResponse>('/decision/' + decisionId + '/booking');
  }
}
