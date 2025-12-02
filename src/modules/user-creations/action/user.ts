
import api from '@/core/config/client';
import { User, CreateUserPayload, UpdateUserPayload } from '../types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/api/Users');
  return response.data;
};

export const getUser = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/api/Users/${id}`);
  return response.data;
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const response = await api.post<User>('/api/Users', payload);
  return response.data;
};

export const updateUser = async (id: string, payload: UpdateUserPayload): Promise<User> => {
  const response = await api.put<User>(`/api/Users/${id}`, payload);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.put(`/api/Users/${id}`);
};

export const changePassword = async (payload: { userId: string; currentPassword: string; newPassword: string }): Promise<void> => {
  await api.put(`/api/Users/changes/${payload.userId}`, {
    currentPassword: payload.currentPassword,
    newPassword: payload.newPassword
  });
};
