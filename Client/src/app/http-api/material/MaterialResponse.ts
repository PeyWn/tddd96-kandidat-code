import {MaterialType} from './MaterialType';

export class MaterialResponse {
  id: number;
  name: string;
  article_no: string;
  quantity: number;
  sterilizing_time: number;
  Material_type: MaterialType;
}
