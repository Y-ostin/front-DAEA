import api from '@/core/config/client';
import type { BuysResourceAttributes, BuysResourceWithResource, CreateBuysResourcePayload, UpdateBuysResourcePayload } from '../types/buysResource.d';

export const fetchBuysResourceAttributes = async (): Promise<BuysResourceWithResource[]> =>{
    const res = await api.get('/api/BuysResource');
    return res.data
}

export const CreateBuysResource = async (payload: CreateBuysResourcePayload): Promise<BuysResourceAttributes> => {
    const res = await api.post('/api/BuysResource', payload);
    return res.data;
}

export const UpdateBuysResource = async (id: string, payload: UpdateBuysResourcePayload): Promise<BuysResourceAttributes> => {
    const res = await api.put(`/api/BuysResource/${id}`, payload);
    return res.data;
}

export const DeleteBuysResource = async (id: string, status: boolean): Promise<void> => {
  await api.put(`/api/BuysResource/${id}`, { status });
};
