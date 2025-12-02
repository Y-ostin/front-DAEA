import api from '@/core/config/client';
import {Role, CreateRolePayload, UpdateRolePayload} from '../types/roles';
import { UpdatePermissionPayload } from '../types/permission';

// Tipo para la respuesta de actualización de permisos
export interface UpdatePermissionResponse {
  message?: string;
  permissions?: unknown[];
  [key: string]: unknown;
}

export const fetchRoles = async (): Promise<Role[]> =>{
    const response = await api.get<Role[]>('/api/Roles');
    return response.data;
}

export const getRole = async (id: string): Promise<Role> =>{
    const response = await api.get<Role>(`/api/Roles/${id}`);
    return response.data;
}

export const createRole = async (payload: CreateRolePayload): Promise<Role> =>{
    const response = await api.post<Role>('/api/Roles', payload);
    return response.data;
}

export const updateRole = async (id: string, payload: UpdateRolePayload): Promise<Role> =>{
    const response = await api.put<Role>(`/api/Roles/${id}`, payload);
    return response.data;
}

export const deleteRole = async (id: string): Promise<void> =>{
    await api.delete(`/api/Roles/${id}`);
}

export const updateRolePermissions = async (roleId: string, payload: UpdatePermissionPayload): Promise<UpdatePermissionResponse> => {
    console.log('🚀 Actualizando permisos del rol:', {
        roleId,
        totalPermissions: payload.permissions?.length || 0
    });
    
    // 🔄 Convertir canUpdate (del form) -> canEdit (para el backend)
    const convertedPayload = {
        ...payload,
        permissions: payload.permissions?.map(p => ({
            moduleId: p.moduleId,
            canRead: p.canRead,
            canWrite: p.canWrite,
            canEdit: p.canUpdate, // Form usa canUpdate, backend usa canEdit
            canDelete: p.canDelete
        }))
    };

    console.log('🔄 Payload enviado al backend:', convertedPayload);
    
    // Usar el endpoint correcto según tu backend
    const response = await api.put<UpdatePermissionResponse>(`/api/Permissions/role/${roleId}`, convertedPayload);
    
    console.log('✅ Permisos actualizados exitosamente:', response.data);
    return response.data;
}
