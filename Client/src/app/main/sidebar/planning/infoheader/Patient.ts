export class Patient {
  Namn:string;
  Personnummer:number;
  Operationstyp:string;
  ICD10:string;
  Bradskandegrad: string;
  Tid: number;
  KVA:string;
  Forberedelsetid:number;
  Operationtid:number;
  Avvecklingstid:number;
  Kompetens:string;
  Sal:string;
  Bokad:boolean;


  constructor(Namn:string, Personnummer:number, Operationstyp:string, ICD10:string, Bradskandegrad:string, Tid:number, KVA:string, forbtid:number,optid:number,avtid:number,komp:string,sal:string, bokad:boolean){

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
    this.Kompetens = komp;
    this.Sal = sal;
    this.Bokad = bokad;
  }
}
