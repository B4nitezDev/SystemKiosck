import { MovementsType } from "../Enums/MovementsTpe";

export interface IInventoryMovements {
  id: number;
  date: Date;
  type: MovementsType;
  productId: number;
  kioskId: number;
  quantity: number;
  observations?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}