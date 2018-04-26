import {DecisionProcedure} from './DecisionProcedure';

export class ProcedureResponse {
  kvåCode: string;
  description: string;
  preparationTime: number;
  operationTime: number;
  dismantlingTime: number;
  postOperationalTime: number;
  downTime: number;

  DecisionProcedure: DecisionProcedure;
}
