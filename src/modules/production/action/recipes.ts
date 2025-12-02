import api from '@/core/config/client';
import {
  Recipe,
  CreateRecipePayload,
  UpdateRecipePayload,
} from '../types/recipes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get<Recipe[]>('/api/Recipes');
  return response.data;
};

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  const response = await api.get<Recipe>(`/api/Recipes/${id}`);
  return response.data;
};

export const fetchRecipeByProd = async (productId: string): Promise<Recipe[]> => {
  const response = await api.get<Recipe[]>(`/api/Recipes/byProduct/${productId}`);
  return response.data;
}

export const createRecipe = async (payload: CreateRecipePayload): Promise<Recipe> => {
  const response = await api.post<Recipe>('/api/Recipes', payload);
  return response.data;
};

export const updateRecipe = async (id: string, payload: UpdateRecipePayload): Promise<Recipe> => {
  const response = await api.put<Recipe>(`/api/Recipes/${id}`, payload);
  return response.data;
};

export const deleteRecipe = async (id: string): Promise<void> => {
  await api.delete(`/api/Recipes/${id}`);
};