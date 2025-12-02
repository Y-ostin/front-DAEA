import api from '@/core/config/client';
import type {
  WarehouseMovementResource,
  CreateWarehouseMovementResourcePayload,
  UpdateWarehouseMovementResourcePayload,
} from '../types/movementResource';

type WarehouseMovementResourceFilters = {
  resource_id?: string;
  movement_type?: string;
  start_date?: string;
  end_date?: string;
};

export const fetchWarehouseMovementResources = async (
  filters: WarehouseMovementResourceFilters
): Promise<WarehouseMovementResource[]> => {
  const params = new URLSearchParams();
  
  // Filtros en formato horizontal optimizado
  Object.entries(filters).forEach(([key, value]) => value && params.append(key, value));

  const res = await api.get('/api/WarehouseMovementResource', { params });
  return res.data;
};

export const createWarehouseMovementResource = async (
  payload: CreateWarehouseMovementResourcePayload
): Promise<WarehouseMovementResource> => {
  const res = await api.post('/api/WarehouseMovementResource', payload);
  return res.data;
};

export const updateWarehouseMovementResource = async (
  id: string,
  payload: UpdateWarehouseMovementResourcePayload
): Promise<WarehouseMovementResource> => {
  const res = await api.put(`/api/WarehouseMovementResource/${id}`, payload);
  return res.data;
};

export const deleteWarehouseMovementResource = async (id: string): Promise<void> => {
  await api.put(`/api/WarehouseMovementResource/${id}`, {}); // ← agrega un objeto vacío
};