export interface CurrentInventoryInterface {
  id: number;
  kioskId: number;
  productId: number;
  currentStock: number;
  minStock: number;
  lastUpdate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}