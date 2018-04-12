export class Patient {
  Namn:string;
  Personnummer:number;
  Operationstyp:string;
  ICD10:string;


  constructor(Namn:string, Personnummer:number, Operationstyp:string, ICD10:string){

    this.Namn = Namn;
    this.Personnummer = Personnummer;
    this.Operationstyp = Operationstyp;
    this.ICD10 = ICD10;
  }
}
