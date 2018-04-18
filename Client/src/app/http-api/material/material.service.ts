import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Material} from './Material';
import {Observable} from 'rxjs/Observable';
import {Procedure} from '../procedure/Procedure';

@Injectable()
export class MaterialService {

  constructor(private httpClient: HttpClient) { }

  getAllMaterial(): Observable<Material[]> {
    return this.httpClient.get<Material[]>('/material');
  }

  getAllMaterialByType(typeId: number): Observable<Material[]> {
    return this.httpClient.get<Material[]>('/material/t/' + typeId);
  }

  getMaterial(id: number): Observable<Material> {
    return this.httpClient.get<Material>('/material/' + id);
  }

  getProceduresUsingMaterial(id: number): Observable<Procedure[]> {
    return this.httpClient.get<Procedure[]>('/material/' + id + '/procedures');
  }
}
