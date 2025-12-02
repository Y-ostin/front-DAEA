import api from '@/core/config/client'
import {
  WarehouseProduct,
  CreateWarehouseProductPayload,
  UpdateWarehouseProductPayload,
} from '../types/product'

export const fetchWarehouseProducts = async (): Promise<{ data: WarehouseProduct[] }> => {
  const response = await api.get('/api/WarehouseProduct')
  return response.data
}

export const fetchWarehouseProductById = async (id: string): Promise<{ data: WarehouseProduct }> => {
  const response = await api.get(`/api/WarehouseProduct/${id}`)
  return response.data
}

export const fetchWarehouseProductsByWarehouse = async (
  warehouseId: string
): Promise<{ data: WarehouseProduct[] }> => {
  const response = await api.get(`/api/WarehouseProduct/warehouse/${warehouseId}`)
  return response.data
}

export const fetchWarehouseProductsByProduct = async (
  productId: string
): Promise<{ data: WarehouseProduct[] }> => {
  const response = await api.get(`/api/WarehouseProduct/product/${productId}`)
  return response.data
}

export const createWarehouseProduct = async (
  payload: CreateWarehouseProductPayload
): Promise<WarehouseProduct> => {
  const response = await api.post('/api/WarehouseProduct', payload)
  return response.data
}

export const updateWarehouseProduct = async (
  id: string,
  payload: UpdateWarehouseProductPayload
): Promise<WarehouseProduct> => {
  const response = await api.put(`/api/WarehouseProduct/${id}`, payload)
  return response.data
}

export const deleteWarehouseProduct = async (id: string): Promise<void> => {
  await api.delete(`/api/WarehouseProduct/${id}`)
}
