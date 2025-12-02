import { z } from 'zod';

export const RentalSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  placeId: z.string(),
  userId: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  amount: z.number().positive(),
  status: z.boolean(),
});

export type Rental = z.infer<typeof RentalSchema>;

export interface CreateRentalPayload {
  customerId: string;
  placeId: string;
  userId: string;
  startDate: Date; // 
  endDate: Date;   // 
  amount: number;
  status?: boolean;
}

export interface UpdateRentalPayload {
  customerId?: string;
  placeId?: string;
  userId?: string;
  startDate?: Date; // 
  endDate?: Date;   // 
  amount?: number;
  status?: boolean;
}
