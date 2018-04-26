import {ClinicResponse} from '../clinic/ClinicResponse';
import {Speciality} from '../speciality/Speciality';

export class StaffResponse {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  Clinic: ClinicResponse;
  Speciality: Speciality;
}
