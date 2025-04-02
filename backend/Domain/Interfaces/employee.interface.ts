export interface IEmployee {
  id: number;
  name: string;
  lastName?: string;
  fistName?: string;
  email?: string;
  phone?: string;
  dni?: string;
  address?: string;
  initialDate?: Date;
  finalDate?: Date;
  turn?: string;
  password: string;
  kioskId: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}