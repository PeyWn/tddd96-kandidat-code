export class Patient {
  Namn: string;
  Personnummer: string;
  Operationstyp: string;
  ICD10: string;
  Bradskandegrad: boolean;
  Tid: Date;
  KVA: string;
  Forberedelsetid: number;
  Operationtid: number;
  Avvecklingstid: number;
  Bokad: boolean;


  constructor(Namn: string,
              Personnummer: string,
              Operationstyp: string,
              ICD10: string,
              Bradskandegrad: boolean,
              Tid: Date,
              KVA: string,
              forbtid: number,
              optid: number,
              avtid: number,
              bokad: boolean) {

    this.Namn = Namn;
    this.Personnummer = Personnummer;
    this.Operationstyp = Operationstyp;
    this.ICD10 = ICD10;
    this.Bradskandegrad = Bradskandegrad;
    this.Tid = Tid;
    this.KVA = KVA;
    this.Forberedelsetid = forbtid;
    this.Operationtid = optid;
    this.Avvecklingstid = avtid;
    this.Bokad = bokad;
  }
}
