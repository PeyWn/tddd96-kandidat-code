import {Clinic} from '../clinic/Clinic';
import {Speciality} from '../speciality/Speciality';
import {BookedStaff} from './BookedStaff';

export class StaffBooking {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  Clinic: Clinic;
  Speciality: Speciality;

  Booked_staff: BookedStaff;
}
