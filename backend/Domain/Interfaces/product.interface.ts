
export interface ProductInterface {
  id: number;
  name: string;
  description?: string;
  price: number;
  KioskId: number;
  orderDetailId?: number[];
  receiptDetailId?: number[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  skuCode: string;
}