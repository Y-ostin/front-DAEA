import api from '@/core/config/client';
import { Place, CreatePlacePayload, UpdatePlacePayload } from '../types/places';

export const fetchPlaces = async (location_id?: string): Promise<Place[]> => {
  const url = location_id ? `/api/rentals/places?location_id=${location_id}` : '/api/rentals/places';
  const response = await api.get<Place[]>(url);
  return response.data;
};

export const fetchPlace = async (id: string): Promise<Place> => {
  const response = await api.get<Place>(`/api/rentals/places/${id}`);
  return response.data;
};

export const createPlace = async (payload: CreatePlacePayload): Promise<Place> => {
  const response = await api.post<Place>('/api/rentals/places', payload);
  return response.data;
};

export const updatePlace = async (id: string, payload: UpdatePlacePayload): Promise<Place> => {
  const response = await api.put<Place>(`/api/rentals/places/${id}`, payload);
  return response.data;
};

export const deletePlace = async (id: string): Promise<void> => {
  await api.delete(`/api/rentals/places/${id}`);
};
