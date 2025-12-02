import { z } from 'zod';

export const placeSchema = z.object({
  locationId: z.string().uuid({ message: 'El ID de la ubicación debe ser un UUID válido' }),
  name: z.string().min(1, 'El nombre es obligatorio').max(100, 'El nombre no puede superar los 100 caracteres'),
  area: z.string().min(1, 'El área es obligatoria').max(100, 'El área no puede superar los 100 caracteres'),
});
