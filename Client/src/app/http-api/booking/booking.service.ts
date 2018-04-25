import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BookingResponse} from './BookingResponse';
import { HttpHeaders } from '@angular/common/http';
import {StaffBooking} from '../staff/StaffBooking';
import {MaterialBooking} from '../material/MaterialBooking';
import {RoomBooking} from '../room/RoomBooking';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  getAllBookings(): Observable<BookingResponse[]> {
    return this.httpClient.get<BookingResponse[]>('/booking');
  }

  getBooking(id: number): Observable<BookingResponse> {
    return this.httpClient.get<BookingResponse>('/booking/' + id);
  }

  createBooking(decisionId: number, preliminary: boolean): Observable<BookingResponse> {
    return this.httpClient.post<BookingResponse>('/booking', {preliminary: preliminary, DecisionId: decisionId}, httpOptions);
  }

  updateBooking(bookingId: number, preliminary: boolean): Observable<Object> {
    return this.httpClient.put('/booking/' + bookingId, {preliminary: preliminary}, httpOptions);
  }

  deleteBooking(bookingId: number): Observable<Object> {
    return this.httpClient.delete('/booking/' + bookingId, httpOptions);
  }

  getBookedStaff(bookingId: number): Observable<StaffBooking[]> {
    return this.httpClient.get<StaffBooking[]>('/booking/' + bookingId + '/staff');
  }

  addStaffToBooking(bookingId: number, staffId: number, startDate: Date, endDate: Date): Observable<Object> {
    return this.httpClient.post('/booking/' + bookingId + '/staff', {staffId: staffId, startDate: startDate, endDate: endDate},
      httpOptions);
  }

  removeStaffFromBooking(bookingId: number, staffId: number): Observable<Object> {
    return this.httpClient.delete('/booking/' + bookingId + '/staff/' + staffId, httpOptions);
  }

  getBookedMaterial(bookingId: number): Observable<MaterialBooking[]> {
    return this.httpClient.get<MaterialBooking[]>('/booking/' + bookingId + 'material');
  }

  addMaterialToBooking(bookingId: number, materialId: number, startDate: Date, endDate: Date): Observable<Object> {
    return this.httpClient.post('/booking/' + bookingId + '/material', {materialId: materialId, startDate: startDate, endDate: endDate},
      httpOptions);
  }

  removeMaterialFromBooking(bookingId: number, materialId: number): Observable<Object> {
    return this.httpClient.delete('/booking/' + bookingId + '/material/' + materialId);
  }

  getBookedRooms(bookingId: number): Observable<RoomBooking[]> {
    return this.httpClient.get<RoomBooking[]>('/booking/' + bookingId + '/room');
  }

  addRoomToBooking(bookingId: number, roomId: number, startDate: Date, endDate: Date): Observable<Object> {
    return this.httpClient.post('/booking/' + bookingId + '/room', {roomId: roomId, startDate: startDate, endDate: endDate},
      httpOptions);
  }

  removeRoomFromBooking(bookingId: number, roomId: number): Observable<Object> {
    return this.httpClient.delete('/booking/' + bookingId + '/room/' + roomId);
  }
}
