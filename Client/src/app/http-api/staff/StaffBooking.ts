import {ClinicResponse} from '../clinic/ClinicResponse';
import {Speciality} from '../speciality/Speciality';
import {BookedStaff} from './BookedStaff';

export class StaffBooking {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  Clinic: ClinicResponse;
  Speciality: Speciality;

  Booked_staff: BookedStaff;
}
