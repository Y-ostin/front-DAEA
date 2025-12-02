import api from '@/core/config/client';
import type { Supplier, CreateSupplierPayload, UpdateSupplierPayload } from '../types/suppliers';

export const fetchSuppliers = async (): Promise<Supplier[]> => {
  const res = await api.get('/api/Supplier'); // <-- SINGULAR
  return res.data;
};

export const createSupplier = async (payload: CreateSupplierPayload): Promise<Supplier> => {
  const res = await api.post('/api/Supplier', payload); // <-- SINGULAR
  return res.data;
};

export const updateSupplier = async (id: string, payload: UpdateSupplierPayload): Promise<Supplier> => {
  const res = await api.put(`/api/Supplier/${id}`, payload); // <-- SINGULAR
  return res.data;
};

export const deleteSupplier = async (id: string, status: boolean): Promise<Supplier> => {
  const res = await api.put(`/api/Supplier/${id}`, { status });
  return res.data;
};
