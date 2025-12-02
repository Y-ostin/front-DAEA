import api from '@/core/config/client';
import {
  ProductAttributes,
  CreateProductPayload,
  UpdateProductPayload,
} from '../types/ListProduct';

const BASE_URL = '/api/inventory/products';

// Obtener todos los productos
export const fetchProducts = async (): Promise<ProductAttributes[]> => {
  const response = await api.get<ProductAttributes[]>(BASE_URL);
  return response.data;
};

// Obtener un producto por ID
export const fetchProductById = async (id: string): Promise<ProductAttributes> => {
  const response = await api.get<ProductAttributes>(`${BASE_URL}/${id}`);
  return response.data;
};

// Crear un nuevo producto (con imagen)
export const createProduct = async (payload: CreateProductPayload): Promise<ProductAttributes> => {
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('categoryId', payload.categoryId);
  formData.append('price', String(payload.price));
  formData.append('description', payload.description);
  if (payload.image) {
    formData.append('image', payload.image);
  }

  const response = await api.post<ProductAttributes>(BASE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// Actualizar un producto existente
export const updateProduct = async (
  id: string,
  payload: UpdateProductPayload
): Promise<ProductAttributes> => {
  const formData = new FormData();
  if (payload.name) formData.append('name', payload.name);
  if (payload.categoryId) formData.append('categoryId', payload.categoryId);
  if (payload.price !== undefined) formData.append('price', String(payload.price));
  if (payload.description) formData.append('description', payload.description);
  if (payload.image) formData.append('image', payload.image);

  const response = await api.put<ProductAttributes>(`${BASE_URL}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// Eliminar un producto
export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`);
};
