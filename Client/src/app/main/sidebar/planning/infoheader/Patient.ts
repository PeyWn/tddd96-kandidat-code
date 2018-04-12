export class Patient {
  Namn:string;
  Personnummer:number;
  Operationstyp:string;
  ICD10:string;
  Bradskandegrad: string;
  Tid: number;


  constructor(Namn:string, Personnummer:number, Operationstyp:string, ICD10:string, Bradskandegrad:string, Tid:number){

    this.Namn = Namn;
    this.Personnummer = Personnummer;
    this.Operationstyp = Operationstyp;
    this.ICD10 = ICD10;
    this.Bradskandegrad = Bradskandegrad;
    this.Tid = Tid;
  }
}
