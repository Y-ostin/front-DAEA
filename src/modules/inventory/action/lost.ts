import api from '@/core/config/client';
import type { SupplierLost, CreateSupplierLostPayload, UpdateSupplierLostPayload } from '../types/lost';

export const fetchSupplierLosts = async (): Promise<SupplierLost[]> => {
  const res = await api.get('/api/SupplierLost');
  return res.data;
};

export const createSupplierLost = async (payload: CreateSupplierLostPayload): Promise<SupplierLost> => {
  const res = await api.post('/api/SupplierLost', payload);
  return res.data;
};

export const updateSupplierLost = async (id: string, payload: UpdateSupplierLostPayload): Promise<SupplierLost> => {
  const res = await api.put(`/api/SupplierLost/${id}`, payload);
  return res.data;
};

export const deleteSupplierLost = async (id: string): Promise<void> => {
  await api.delete(`/api/SupplierLost/${id}`);
};
