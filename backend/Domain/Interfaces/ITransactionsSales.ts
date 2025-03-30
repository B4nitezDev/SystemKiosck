import { TransactionsState } from "../Enums/TransactionsState";

export interface ITransactionsSales {
  id: number;
  date: Date;
  kioskId: number;
  employeeId: number;
  detail: string;
  total: number;
  status: TransactionsState;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}