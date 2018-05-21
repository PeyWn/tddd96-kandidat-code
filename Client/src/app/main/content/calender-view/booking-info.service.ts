import { Injectable } from '@angular/core';
import {GetPatientsService} from '../../get-patients.service';

@Injectable()
export class BookingInfoService {

  roomName: string = null;
  roomId: number = null;
  startDate: Date = null;
  endDate: Date = null;
  constructor(private getDecisionService: GetPatientsService) {
    this.getDecisionService.changedPatient.subscribe(() => {
      this.roomName = null;
      this.roomId = null;
      this.startDate = null;
      this.endDate = null;
    });
  }

}
