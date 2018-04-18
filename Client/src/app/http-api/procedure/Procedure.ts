import {DecisionProcedure} from './DecisionProcedure';

export class Procedure {
  kvåCode: string;
  description: string;
  preparationTime: number;
  operationTime: number;
  dismantlingTime: number;
  postOperationalTime: number;
  downTime: number;

  DecisionProcedure: DecisionProcedure;
}
