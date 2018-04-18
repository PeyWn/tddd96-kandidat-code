import {Clinic} from '../clinic/Clinic';
import {Staff} from '../staff/Staff';

export class Decision {
  id: number;
  decisionDate: Date;
  urgent: boolean;
  latestDate: Date;
  PatientSsn: string;
  ICD10Code: string;

  Clinic: Clinic;
  Staff: Staff;
}
