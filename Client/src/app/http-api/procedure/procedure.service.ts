import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ProcedureResponse} from './ProcedureResponse';
import {StaffResponse} from '../staff/StaffResponse';
import {DecisionResponse} from '../decision/DecisionResponse';
import {RoomResponse} from '../room/RoomResponse';
import {MaterialResponse} from '../material/MaterialResponse';

@Injectable()
export class ProcedureService {

  constructor(private httpClient: HttpClient) { }

  getAllProcedures(): Observable<ProcedureResponse[]> {
    return this.httpClient.get<ProcedureResponse[]>('/procedure');
  }

  getProcedure(kvåCode: string) {
    return this.httpClient.get<ProcedureResponse>('/procedure/' + kvåCode);
  }

  getStaffWithCompetence(kvåCode: string): Observable<StaffResponse[]> {
    return this.httpClient.get<StaffResponse[]>('/procedure/' + kvåCode + '/staff');
  }

  getDecisionsWithProcedure(kvåCode: string): Observable<DecisionResponse[]> {
    return this.httpClient.get<DecisionResponse[]>('/procedure/' + kvåCode + '/decision');
  }

  getRoomsWithProcedure(kvåCode: string): Observable<RoomResponse[]> {
    return this.httpClient.get<RoomResponse[]>('/procedure/' + kvåCode + '/room');
  }

  getMaterialForProcedure(kvåCode: string): Observable<MaterialResponse[]> {
    return this.httpClient.get<MaterialResponse[]>('/procedure/' + kvåCode + '/material');
  }
}
