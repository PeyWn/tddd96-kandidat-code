import {BookedRoom} from '../room/BookedRoom';
import {RoomType} from '../room/RoomType';

export class BookingRoom {
  id: number;
  name: string;
  LocalType: RoomType;

  Booked_local: BookedRoom;
}
