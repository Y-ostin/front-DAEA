import api from '@/core/config/client';
import { Lost, CreateLostPayload, UpdateLostPayload } from '../types/lost';

export const fetchAllLost = async (): Promise<Lost[]> => {
  const response = await api.get<Lost[]>('/api/Lost');
  return response.data;
};

export const fetchLostById = async (id: string): Promise<Lost> => {
  const response = await api.get<Lost>(`/api/Lost/${id}`);
  return response.data;
};

export const createLost = async (payload: CreateLostPayload): Promise<Lost> => {
  const response = await api.post<Lost>('/api/Lost', payload);
  return response.data;
};

export const updateLost = async (id: string, payload: UpdateLostPayload): Promise<Lost> => {
  const response = await api.put<Lost>(`/api/Lost/${id}`, payload);
  return response.data;
};

export const deleteLost = async (id: string): Promise<void> => {
  await api.delete(`/api/Lost/${id}`);
};