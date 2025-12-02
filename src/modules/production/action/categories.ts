import api from '@/core/config/client';
import { Category, CreateCategoryPayload, UpdateCategoryPayload } from '../types/categories';

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>('/api/Categories');
  return response.data;
};

export const fetchCategory = async (id: string): Promise<Category> => {
  const response = await api.get<Category>(`/api/Categories/${id}`);
  return response.data;
};

export const createCategory = async (
  payload: CreateCategoryPayload,
): Promise<Category> => {
  const response = await api.post<Category>('/api/Categories', {
    ...payload,
    status: true,          // ← entra como activa
  });
  return response.data;
};

export const updateCategory = async (id: string, payload: UpdateCategoryPayload): Promise<Category> => {
  const response = await api.put<Category>(`/api/Categories/${id}`, payload);
  return response.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await api.put(`/api/Categories/${id}`, { status: false });
};