import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from '../../get-patients.service';
import {Patient} from './infoheader/Patient';
import {ProcedureService} from '../../../http-api/procedure/procedure.service';
import {MaterialResponse} from '../../../http-api/material/MaterialResponse';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];

  getProcedureMaterial(KVA: string)  {
    this.procService.getMaterialForProcedure(KVA).subscribe( (procedureMaterial: MaterialResponse[]) => {
      for (let i = 0; i < procedureMaterial.length; i++) {
        this.material.push(procedureMaterial[i]);
      }
    });
  }

  constructor(private gpService: GetPatientsService, private procService: ProcedureService ) {
    this.patient = this.getPatient();
  }
  ngOnInit() {
    this.getProcedureMaterial(this.getPatient().procedures[0].kvåCode); // TODO There can be multiple procedures
  }

  getPatient(): Patient {
    return this.gpService.currentPatient;
  }

}
