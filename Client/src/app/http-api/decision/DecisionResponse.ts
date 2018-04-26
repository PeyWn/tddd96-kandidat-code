import {ClinicResponse} from '../clinic/ClinicResponse';
import {StaffResponse} from '../staff/StaffResponse';

export class DecisionResponse {
  id: number;
  decisionDate: Date;
  urgent: boolean;
  latestDate: Date;
  PatientSsn: string;
  ICD10Code: string;

  Clinic: ClinicResponse;
  Staff: StaffResponse;
}
