import {BookedStaff} from './BookedStaff';

export class StaffBooking {
  id: number;
  preliminary: boolean;
  updatedAt: string;
  createdAt: string;
  DecisionId: number;
  UserId: number;

  Booked_staff: BookedStaff;
}
