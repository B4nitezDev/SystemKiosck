import { ReceiptStatus } from "../Enums/ReceiptStatus";

export interface ReceiptInterface {
  id: number;
  receiptDate: Date;
  purchaseOrderId: number;
  kioskId: number;
  status: ReceiptStatus;
  receiptDetails: number[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}