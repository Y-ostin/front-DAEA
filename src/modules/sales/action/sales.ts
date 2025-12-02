import api from '@/core/config/client';
import { salesAttributes } from '../types/sales';

export const fetchSales = async (): Promise<salesAttributes[]> => {
  const response = await api.get<salesAttributes[]>('/api/sales');
  return response.data;
};

export const fetchSale = async (id: string): Promise<salesAttributes> => {
  const response = await api.get<salesAttributes>(`/api/sales/${id}`);
  return response.data;
};

export const createSale = async (
  payload: Omit<salesAttributes, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<salesAttributes> => {
  const response = await api.post<salesAttributes>('/api/sales', payload);
  return response.data;
};

export const updateSale = async (
  id: string, 
  payload: Partial<Omit<salesAttributes, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<salesAttributes> => {
  const response = await api.put<salesAttributes>(`/api/sales/${id}`, payload);
  return response.data;
};

export const deleteSale = async (id: string): Promise<void> => {
  await api.delete(`/api/sales/${id}`);
};