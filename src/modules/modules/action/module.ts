import api from '@/core/config/client';
import { Module , UpdateModulePayload} from '../types/modules';

export const fetchModules = async (): Promise<Module[]> =>{
    const response = await api.get<Module[]>('/api/Modules');
    return response.data;
}

export const getModule = async (id: string): Promise<Module> =>{
    const response = await api.get<Module>(`/api/Modules/${id}`);
    return response.data;
}

export const updateModules = async (id: string, payload: UpdateModulePayload): Promise<Module> =>{
    const response = await api.put<Module>(`/api/Modules/${id}`, payload);
    return response.data;
}