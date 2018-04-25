import {Clinic} from '../clinic/Clinic';
import {Speciality} from '../speciality/Speciality';

export class Staff {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  Clinic: Clinic;
  Speciality: Speciality;
}
