import {EventEmitter, Injectable, Output} from '@angular/core';
import {ProcedureResponse} from '../http-api/procedure/ProcedureResponse';

@Injectable()
export class GetCalendarFiltersService {
  procedures: string[] = [];
  duration: number;

  @Output() filtersUpdated = new EventEmitter();


  constructor() {
  }

  setDuration(duration: number): void {
    this.duration = duration;
    this.filtersUpdated.emit();
  }

  addProcedures(procedures: ProcedureResponse[]): void {
    for (let procedure of procedures) {
      this.procedures.push(procedure.kvåCode);
    }
    this.filtersUpdated.emit();
  }

  deleteProcedures(procedures: ProcedureResponse[]): void {
    for (let procedure of procedures) {
      const index: number = this.procedures.indexOf(procedure.kvåCode);
      if (index !== -1) {
        this.procedures.splice(index, 1);
      }
    }
    this.filtersUpdated.emit();
  }

  resetProcedures(): void {
    this.procedures.length = 0;
  }

}
