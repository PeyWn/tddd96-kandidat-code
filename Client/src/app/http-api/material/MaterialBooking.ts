import {MaterialType} from './MaterialType';
import {BookedMaterial} from './BookedMaterial';

export class MaterialBooking {
  id: number;
  name: string;
  article_no: string;
  quantity: number;
  sterilizing_time: number;
  Material_type: MaterialType;

  Booked_material: BookedMaterial;
}
