import {Speciality} from '../speciality/Speciality';
import {BookedStaff} from '../staff/BookedStaff';
import {ClinicResponse} from '../clinic/ClinicResponse';

export class BookingStaff {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  Clinic: ClinicResponse;
  Speciality: Speciality;

  Booked_staff: BookedStaff;
}
