import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Decision} from './Decision';
import {Observable} from 'rxjs/Observable';
import {Procedure} from '../procedure/Procedure';


@Injectable()
export class DecisionService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDecisions(): Observable<Decision[]> {
    return this.httpClient.get<Decision[]>('/decision');
  }

  getDecision(id: number): Observable<Decision> {
    return this.httpClient.get<Decision>('/decision/' + id);
  }

  getProceduresForDecision(decisionId: number): Observable<Procedure[]> {
    return this.httpClient.get<Procedure[]>('/decision/' + decisionId + '/procedures');
  }
}
