export class Patient {
  Personnummer: number;
  Namn: string;
  Beslut: string;
  Beskrivning: string;


  constructor(Personnummer: number, Namn: string, Beslut: string, Beskrivning: string) {

  this.Personnummer = Personnummer;
  this.Namn = Namn;
  this.Beslut = Beslut;
  this.Beskrivning = Beskrivning;
  }
}
