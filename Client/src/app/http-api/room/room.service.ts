import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Room} from './Room';
import {HttpClient} from '@angular/common/http';
import {FreeTime} from '../freeTime/FreeTime';

@Injectable()
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>('/room');
  }

  getRoom(id: number): Observable<Room> {
    return this.httpClient.get<Room>('/room/' + id);
  }

  getRoomsByType(roomTypeId: number): Observable<Room[]> {
    return this.httpClient.get<Room[]>('/room/t/' + roomTypeId);
  }

  getOpenTimesForRoom(id: number): Observable<FreeTime[]> {
    return this.httpClient.get<FreeTime[]>('/room/' + id + '/avaliable');
  }
}
