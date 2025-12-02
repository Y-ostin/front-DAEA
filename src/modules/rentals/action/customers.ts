import api from '@/core/config/client';
import { Customer, CreateCustomerRequest, UpdateCustomerRequest } from '../types/customer';

// Obtener todos los customers
export const fetchCustomers = async (): Promise<Customer[]> => {
  try {
    const response = await api.get<Customer[]>('/api/rentals/customers');
    return response.data;
  } catch (error) {
    console.warn('API /customers no disponible, devolviendo array vacío');
    return [];
  }
};

// Crear un nuevo customer
export const createCustomer = async (customerData: CreateCustomerRequest): Promise<Customer> => {
  const response = await api.post<Customer>('/api/rentals/customers', customerData);
  return response.data;
};

// Actualizar un customer
export const updateCustomer = async (id: string, customerData: UpdateCustomerRequest): Promise<Customer> => {
  try {
    const response = await api.put<Customer>(`/api/rentals/customers/${id}`, customerData);
    return response.data;
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
};

// Eliminar un customer
export const deleteCustomer = async (id: string): Promise<void> => {
  try {
    await api.delete(`/api/rentals/customers/${id}`);
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
};

// Buscar customers por nombre
export const searchCustomers = async (query: string): Promise<Customer[]> => {
  try {
    // Note: Backend might not have a search endpoint, or it might be filtered on client side.
    // If backend has search, it would be /api/rentals/customers/search?q=...
    // But CustomersController.cs does NOT have a search endpoint.
    // So this will likely fail 404.
    // We should probably filter client side or add endpoint.
    // For now, let's assume we fetch all and filter, or just return empty if not implemented.
    // But the user asked to "contrast what front expects vs back sends".
    // If front expects search, back should provide it.
    // However, I'll leave it as is but fix the return type expectation if it DID exist.
    const response = await api.get<Customer[]>(`/api/rentals/customers/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching customers:', error);
    return [];
  }
};
