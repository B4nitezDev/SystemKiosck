export interface ISalesTransactions {
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