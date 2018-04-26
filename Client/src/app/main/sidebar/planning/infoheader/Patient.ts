import {ProcedureResponse} from '../../../../http-api/procedure/ProcedureResponse';

export class Patient {
  Namn: string;
  Personnummer: string;
  ICD10: string;
  Bradskandegrad: boolean;
  Tid: Date;
  Bokad: boolean;
  procedures: ProcedureResponse[];

  constructor(Namn: string,
              Personnummer: string,
              ICD10: string,
              Bradskandegrad: boolean,
              Tid: Date,
              bokad: boolean,
              procedures: ProcedureResponse[]) {

    this.Namn = Namn;
    this.Personnummer = Personnummer;
    this.ICD10 = ICD10;
    this.Bradskandegrad = Bradskandegrad;
    this.Tid = Tid;
    this.Bokad = bokad;
    this.procedures = procedures;
  }
}
