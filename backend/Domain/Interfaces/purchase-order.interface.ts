import { OrderStatus } from "../Enums/OrderStatus";
import { OrderDetail } from "../Entities/OrderDetail";

export interface PurchaseOrderInterface {
  id: number;
  dateOrder: Date;
  providerId: number;
  kioskId: number;
  total: number;
  status: OrderStatus;
  details: OrderDetail[];
  receiptIds: number[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}