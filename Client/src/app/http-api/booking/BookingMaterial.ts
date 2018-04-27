import {MaterialType} from '../material/MaterialType';
import {BookedMaterial} from '../material/BookedMaterial';

export class BookingMaterial {
  id: number;
  name: string;
  article_no: string;
  quantity: number;
  sterilizing_time: number;
  Material_type: MaterialType;

  Booked_material: BookedMaterial;
}
