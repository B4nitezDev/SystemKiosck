﻿export interface ReceiptDetail {
  id: number;
  receiptId: number;
  productId: number;
  quantity: number;
  observation?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}