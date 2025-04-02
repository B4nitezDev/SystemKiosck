export interface ProviderInterface {
  id: number;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  kioskId: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}