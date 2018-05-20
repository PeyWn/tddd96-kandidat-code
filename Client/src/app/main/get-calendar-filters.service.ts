import {EventEmitter, Injectable, Output} from '@angular/core';

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

  addProcedure(procedure: string): void {
    this.procedures.push(procedure);
    this.filtersUpdated.emit();
  }

  deleteProcedure(procedure: string): void{
    const index: number = this.procedures.indexOf(procedure);
    if (index !== -1) {
      this.procedures.splice(index, 1);
      this.filtersUpdated.emit();
    }
  }

}
