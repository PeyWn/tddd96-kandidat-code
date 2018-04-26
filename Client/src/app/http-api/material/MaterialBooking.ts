import {BookedMaterial} from './BookedMaterial';

export class MaterialBooking {
  id: number;
  preliminary: boolean;
  updatedAt: string;
  createdAt: string;
  DecisionId: number;
  UserId: number;

  Booked_material: BookedMaterial;
}
