import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICD10} from './ICD10';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Icd10Service {

  constructor(private httpClient: HttpClient) { }

  getAllICD10s(): Observable<ICD10[]> {
    return this.httpClient.get<ICD10[]>('/icd10');
  }
}
