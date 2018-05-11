import {ProcedureResponse} from '../../../../http-api/procedure/ProcedureResponse';
import {BookingResponse} from '../../../../http-api/booking/BookingResponse';

export class Patient {
  id: number;
  Namn: string;
  Personnummer: string;
  ICD10: string;
  Bradskandegrad: boolean;
  Tid: Date;
  booking: BookingResponse;
  procedures: ProcedureResponse[];
  totalOperationTime: number;

  constructor(id: number,
              Namn: string,
              Personnummer: string,
              ICD10: string,
              Bradskandegrad: boolean,
              Tid: Date,
              booking: BookingResponse,
              procedures: ProcedureResponse[]) {
    this.id = id;
    this.Namn = Namn;
    this.Personnummer = Personnummer;
    this.ICD10 = ICD10;
    this.Bradskandegrad = Bradskandegrad;
    this.Tid = Tid;
    this.booking = booking;
    this.procedures = procedures;
    this.calculateTotalOperationTime();
  }

  calculateTotalOperationTime(): void {
    this.totalOperationTime = 0;
    let maxPreparationTime: number = 0;
    let maxDismantlingTime: number = 0;
    for (let i = 0; i < this.procedures.length; ++i) {
      let procedure: ProcedureResponse = this.procedures[i];
      this.totalOperationTime += procedure.operationTime;
      this.totalOperationTime += procedure.downTime;
      if (procedure.preparationTime > maxPreparationTime) {
        maxPreparationTime = procedure.preparationTime;
      }
      if (procedure.dismantlingTime > maxDismantlingTime) {
        maxDismantlingTime = procedure.dismantlingTime;
      }
    }
    this.totalOperationTime += maxPreparationTime;
    this.totalOperationTime += maxDismantlingTime;
  }
}
