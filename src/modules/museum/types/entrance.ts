export interface Entrance {
  id: string;
  userId: string;
  typePersonId: string;
  saleDate: string;
  cantidad: number;
  saleNumber: string;
  saleChannel: string;
  totalSale: number;
  paymentMethod: string;
  free: boolean;
  createdAt: string;
  updatedAt: string;
  // Flattened properties from Backend DTO
  userName?: string;
  typePersonName?: string;
  saleChannelName?: string;
  paymentMethodName?: string;
}

export interface EntrancePayload {
  userId: string;
  typePersonId: string;
  saleDate: string;
  cantidad: number;
  saleNumber: string;
  saleChannel: string;
  totalSale: number;
  paymentMethod: string;
  free: boolean;
}