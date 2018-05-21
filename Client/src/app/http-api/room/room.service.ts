import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RoomResponse} from './RoomResponse';
import {HttpClient} from '@angular/common/http';
import {FreeTime} from '../freeTime/FreeTime';
import {RoomBooking} from './RoomBooking';

@Injectable()
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  getAllRooms(): Observable<RoomResponse[]> {
    return this.httpClient.get<RoomResponse[]>('/room');
  }

  getRoom(id: number): Observable<RoomResponse> {
    return this.httpClient.get<RoomResponse>('/room/' + id);
  }

  getRoomsByType(roomTypeId: number): Observable<RoomResponse[]> {
    return this.httpClient.get<RoomResponse[]>('/room/t/' + roomTypeId);
  }

  getOpenTimesForRoom(id: number): Observable<FreeTime[]> {
    return this.httpClient.get<FreeTime[]>('/room/' + id + '/available');
  }

  getBookingsForRoom(id: number): Observable<RoomBooking[]> {
    return this.httpClient.get<RoomBooking[]>('/room/' + id + '/booked');
  }
}
