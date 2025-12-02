import { z } from 'zod';

export const entranceSchema = z.object({
  userId: z.string().uuid('El ID del usuario debe ser un UUID válido'),
  typePersonId: z.string().uuid('El ID del tipo de persona debe ser un UUID válido'),
  saleDate: z.string().min(1, 'La fecha de venta es obligatoria'),
  cantidad: z.number().int().nonnegative('La cantidad debe ser un número entero no negativo'),
  saleNumber: z.string().min(1, 'El número de venta es obligatorio'),
  saleChannel: z.string().min(1, 'El canal de venta es obligatorio'),
  totalSale: z.number().nonnegative('El total de la venta no puede ser negativo'),
  paymentMethod: z.string().min(1, 'El método de pago es obligatorio'),
  free: z.boolean(),
}); 