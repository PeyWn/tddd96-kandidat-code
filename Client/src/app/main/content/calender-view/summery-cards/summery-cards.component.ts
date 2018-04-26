import {Component, Input, OnInit} from '@angular/core';
import {GetPatientsService} from "../../../get-patients.service";
import {Patient} from "../../../sidebar/planning/infoheader/Patient";
import {ProcedureService} from "../../../../http-api/procedure/procedure.service";
import {MaterialResponse} from "../../../../http-api/material/MaterialResponse";

@Component({
  selector: 'app-summery-cards',
  templateUrl: './summery-cards.component.html',
  styleUrls: ['./summery-cards.component.css']
})
export class SummeryCardsComponent implements OnInit {
  @Input() patient: Patient;
  material: Array<MaterialResponse> = [];
  materialList = false;
  urgency: string;

  constructor(private gpService: GetPatientsService, private procService: ProcedureService) {
    this.patient = this.getPatient();
  }

  ngOnInit() {
    this.getProcedureMaterial(this.getPatient().KVA);
    if (this.patient.Bradskandegrad) {
      this.urgency = 'AKUT';
    }
  }

  getPatient(): Patient {
    return this.gpService.currentPatient;
  }
  getProcedureMaterial(KVA: string)  {
    this.procService.getMaterialForProcedure(KVA).subscribe( (procedureMaterial: MaterialResponse[]) => {
      for (let i = 0; i < procedureMaterial.length; i++) {
        this.material.push(procedureMaterial[i]);
      }
    });
  }
}
