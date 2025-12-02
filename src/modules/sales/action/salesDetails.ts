import api from '@/core/config/client';
import { salesItemsAttributes } from '../types/salesDetails';

export const fetchSalesDetails = async (): Promise<salesItemsAttributes[]> => {
  const response = await api.get<salesItemsAttributes[]>('/api/saleDetail');
  return response.data;
};

export const fetchSalesDetail = async (id: string): Promise<salesItemsAttributes> => {
  const response = await api.get<salesItemsAttributes>(`/api/saleDetail/${id}`);
  return response.data;
};

export const createSalesDetail = async (
  payload: Omit<salesItemsAttributes, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<salesItemsAttributes> => {
  const response = await api.post<salesItemsAttributes>('/api/saleDetail', payload);
  return response.data;
};

export const updateSalesDetail = async (
  id: string, 
  payload: Partial<Omit<salesItemsAttributes, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<salesItemsAttributes> => {
  const response = await api.put<salesItemsAttributes>(`/api/saleDetail/${id}`, payload);
  return response.data;
};

export const deleteSalesDetail = async (id: string): Promise<void> => {
  await api.delete(`/api/saleDetail/${id}`);
};