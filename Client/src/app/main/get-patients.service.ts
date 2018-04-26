import {EventEmitter, Injectable, Output} from '@angular/core';
import {Patient} from './sidebar/planning/infoheader/Patient';
import {DecisionService} from '../http-api/decision/decision.service';
import {DecisionResponse} from '../http-api/decision/DecisionResponse';
import {PatientService} from '../http-api/patient/patient.service';
import {PatientResponse} from '../http-api/patient/PatientResponse';
import {ProcedureResponse} from '../http-api/procedure/ProcedureResponse';

@Injectable()
export class GetPatientsService {
  patients: Array<Patient>;
  currentPatient: Patient;

  @Output() fetchedPatient = new EventEmitter();

  constructor(
    private decisionService: DecisionService,
    private patientService: PatientService
  ) {

    this.patients = new Array<Patient>();
    this.decisionService.getAllDecisions().subscribe((decisions: DecisionResponse[]) => {
      for (let i = 0; i < decisions.length; i++) {
        this.patientService.getPatient(decisions[i].PatientSsn).subscribe((patient: PatientResponse) => {
          this.decisionService.getProceduresForDecision(decisions[i].id).subscribe((procedures: ProcedureResponse[]) => {
            let sortedProcedures: ProcedureResponse[];
            for (let j = 0; j < procedures.length; j++) {
              sortedProcedures[procedures[j].DecisionProcedure.procedureOrder - 1] = procedures[j];
            }
            let newPatient: Patient = new Patient(
              patient.firstName + ' ' + patient.lastName,
              patient.ssn,
              decisions[i].ICD10Code,
              decisions[i].urgent,
              new Date(decisions[i].latestDate),
              false,
              sortedProcedures);
            this.patients.push(newPatient);
            this.fetchedPatient.emit();
          });
        });
      }
    });
  }
}
