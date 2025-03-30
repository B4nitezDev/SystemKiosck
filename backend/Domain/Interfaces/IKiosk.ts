export interface IKiosk {
  id: number;
  name: string;
  address?: string;
  description?: string;
  phone?: string;
  email?: string;
  UsersList: number[];
  ProductsList: number[];
  ReceiptsId: number[];

  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}