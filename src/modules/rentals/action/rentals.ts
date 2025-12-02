import api from '@/core/config/client';
import { Rental, CreateRentalPayload, UpdateRentalPayload } from '../types/rentals';

export const fetchAllRentals = async (): Promise<Rental[]> => {
  const response = await api.get<Rental[]>('/rentals');
  return response.data;
};

export const fetchRentalById = async (id: string): Promise<Rental> => {
  const response = await api.get<Rental>(`/rentals/${id}`);
  return response.data;
};

export const createRental = async (payload: CreateRentalPayload): Promise<Rental> => {
  console.log('📤 Enviando datos al backend:', payload);
  
  // ✅ Validaciones según especificaciones del backend
  const validations = {
    customerId: {
      value: payload.customerId,
      isString: typeof payload.customerId === 'string',
      isNotEmpty: payload.customerId.length > 0,
      isUUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(payload.customerId)
    },
    placeId: {
      value: payload.placeId,
      isString: typeof payload.placeId === 'string',
      isNotEmpty: payload.placeId.length > 0,
      isUUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(payload.placeId)
    },
    userId: {
      value: payload.userId,
      isString: typeof payload.userId === 'string',
      isNotEmpty: payload.userId.length > 0,
      isUUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(payload.userId)
    },
    startDate: {
      value: payload.startDate,
      isDate: payload.startDate instanceof Date,
      isValid: !isNaN(payload.startDate.getTime())
    },
    endDate: {
      value: payload.endDate,
      isDate: payload.endDate instanceof Date,
      isValid: !isNaN(payload.endDate.getTime())
    },
    amount: {
      value: payload.amount,
      isNumber: typeof payload.amount === 'number',
      isPositive: payload.amount > 0
    }
  };

  console.log('🔍 Validaciones del payload:', validations);

  // ✅ Identificar errores específicos
  const errors = [];
  if (!validations.customerId.isUUID) errors.push(`customerId "${payload.customerId}" no es un UUID válido`);
  if (!validations.placeId.isUUID) errors.push(`placeId "${payload.placeId}" no es un UUID válido`);
  if (!validations.userId.isUUID) errors.push(`userId "${payload.userId}" no es un UUID válido`);
  if (!validations.startDate.isValid) errors.push('startDate no es una fecha válida');
  if (!validations.endDate.isValid) errors.push('endDate no es una fecha válida');
  if (!validations.amount.isPositive) errors.push(`amount ${payload.amount} debe ser positivo`);

  if (errors.length > 0) {
    console.error('❌ Errores de validación:', errors);
    throw new Error(`Errores de validación: ${errors.join(', ')}`);
  }

  console.log('📤 Estructura detallada:', {
    customerId: payload.customerId,
    placeId: payload.placeId,
    userId: payload.userId,
    startDate: payload.startDate,
    startDateIso: payload.startDate.toISOString(),
    endDate: payload.endDate,
    endDateIso: payload.endDate.toISOString(),
    amount: payload.amount
  });
  
  try {
    // ✅ Convertir fechas a formato ISO string (formato esperado por el backend)
    const backendPayload = {
      customerId: payload.customerId,
      placeId: payload.placeId,
      userId: payload.userId,
      startDate: payload.startDate.toISOString(), // "2025-08-05T14:00:00.000Z"
      endDate: payload.endDate.toISOString(),     // "2025-08-08T18:00:00.000Z"
      amount: payload.amount
    };
    
    console.log('📤 Payload transformado para backend:', backendPayload);
    
    const response = await api.post<Rental>('/rentals', backendPayload);
    console.log('✅ Respuesta del backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error del backend:', {
      status: (error as any).response?.status,
      statusText: (error as any).response?.statusText,
      data: (error as any).response?.data,
      message: (error as any).message,
      payload: payload
    });
    throw error;
  }
};

export const updateRental = async (id: string, payload: UpdateRentalPayload): Promise<Rental> => {
  const response = await api.patch<Rental>(`/rentals/${id}`, payload);
  return response.data;
};

export const deleteRental = async (id: string): Promise<void> => {
  await api.put(`/rentals/${id}`);
};
