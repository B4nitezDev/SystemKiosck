import { TransactionsShoppingState } from "../Enums/TransactionsShoppingState";

export interface ITransactionsSales {
  id: number;
  date: Date;
  kioskId: number;
  employeeId: number;
  detail: string;
  total: number;
  status: TransactionsShoppingState;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}