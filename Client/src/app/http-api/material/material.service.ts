import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MaterialResponse} from './MaterialResponse';
import {Observable} from 'rxjs/Observable';
import {ProcedureResponse} from '../procedure/ProcedureResponse';

@Injectable()
export class MaterialService {

  constructor(private httpClient: HttpClient) { }

  getAllMaterial(): Observable<MaterialResponse[]> {
    return this.httpClient.get<MaterialResponse[]>('/material');
  }

  getAllMaterialByType(typeId: number): Observable<MaterialResponse[]> {
    return this.httpClient.get<MaterialResponse[]>('/material/t/' + typeId);
  }

  getMaterial(id: number): Observable<MaterialResponse> {
    return this.httpClient.get<MaterialResponse>('/material/' + id);
  }

  getProceduresUsingMaterial(id: number): Observable<ProcedureResponse[]> {
    return this.httpClient.get<ProcedureResponse[]>('/material/' + id + '/procedures');
  }
}
