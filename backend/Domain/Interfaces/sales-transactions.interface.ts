export interface SalesTransactionsInterface {
  id: number;
  kioskId: number;
  employeeId: number;
  detail: string;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}