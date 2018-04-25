import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Procedure} from './Procedure';
import {Staff} from '../staff/Staff';
import {Decision} from '../decision/Decision';
import {Room} from '../room/Room';
import {Material} from '../material/Material';

@Injectable()
export class ProcedureService {

  constructor(private httpClient: HttpClient) { }

  getAllProcedures(): Observable<Procedure[]> {
    return this.httpClient.get<Procedure[]>('/procedure');
  }

  getProcedure(kvåCode: string) {
    return this.httpClient.get<Procedure>('/procedure/' + kvåCode);
  }

  getStaffWithCompetence(kvåCode: string): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>('/procedure/' + kvåCode + '/staff');
  }

  getDecisionsWithProcedure(kvåCode: string): Observable<Decision[]> {
    return this.httpClient.get<Decision[]>('/procedure/' + kvåCode + '/decision');
  }

  getRoomsWithProcedure(kvåCode: string): Observable<Room[]> {
    return this.httpClient.get<Room[]>('/procedure/' + kvåCode + '/room');
  }

  getMaterialForProcedure(kvåCode: string): Observable<Material[]> {
    return this.httpClient.get<Material[]>('/procedure/' + kvåCode + '/material');
  }
}
