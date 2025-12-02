import api from '@/core/config/client';
import type { SupplierCategory, CreateSupplierCategoryPayload, UpdateSupplierCategoryPayload } from '../types/categories';

export const fetchSupplierCategories = async (): Promise<SupplierCategory[]> => {
  const res = await api.get('/api/SupplierCategories');
  return res.data;
};

export const createSupplierCategory = async (payload: CreateSupplierCategoryPayload): Promise<SupplierCategory> => {
  const res = await api.post('/api/SupplierCategories', payload);
  return res.data;
};

export const updateSupplierCategory = async (id: string, payload: UpdateSupplierCategoryPayload): Promise<SupplierCategory> => {
  const res = await api.put(`/api/SupplierCategories/${id}`, payload);
  return res.data;
};

export const deleteSupplierCategory = async (id: string): Promise<void> => {
  await api.put(`/api/SupplierCategories/${id}`);
};