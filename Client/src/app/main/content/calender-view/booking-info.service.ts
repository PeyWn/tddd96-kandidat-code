import { Injectable } from '@angular/core';

@Injectable()
export class BookingInfoService {

  roomName: string;
  roomId: number;
  startDate: Date
  endDate: Date
  constructor() { }

}
