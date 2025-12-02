import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/core/store/auth';
import { useState, useEffect } from 'react';
import { login } from '../actions/login';
import type { User } from '@/modules/user-creations/types/user';
import { UserWithPermissions } from '@/core/utils/permission-types';
import { LoginCredentials, LoginResponse } from '../types/loginactionside';

export const useAdminLogin = () => {
  const { setUser, setUserWithPermissions } = useAuthStore();

  const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: login,
    onSuccess: async (data) => {
      console.log('🔥 RESPUESTA COMPLETA DEL LOGIN:', data);
      
      // 🔥 PASO 1: GUARDAR TOKEN INMEDIATAMENTE
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        console.log('✅ Token guardado en localStorage');
      }
      
      // 🔥 PASO 2: Usar los datos del login directamente
      try {
        const extendedUserData = data.user as UserWithPermissions & { 
          dni?: string; 
          phonenumber?: string; 
        };
        
        // Normalizar los datos del usuario para manejar ambos formatos (Role vs role)
        const normalizedUser: UserWithPermissions = {
          ...data.user,
          // Soportar tanto 'role' como 'Role'
          role: data.user.role || data.user.Role ? {
            id: data.user.role?.id || data.user.Role?.id || '',
            name: data.user.role?.name || data.user.Role?.name || '',
            description: data.user.role?.description || data.user.Role?.description || '',
            status: data.user.role?.status || data.user.Role?.status || true,
            permissions: data.user.role?.permissions || data.user.Role?.Permissions || [],
            createdAt: data.user.role?.createdAt || data.user.Role?.createdAt,
            updatedAt: data.user.role?.updatedAt || data.user.Role?.updatedAt,
          } : undefined,
        };
        
        const userToSave: User = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          roleId: data.user.roleId,
          dni: extendedUserData.dni || '',
          phonenumber: extendedUserData.phonenumber || '',
          password: '',
          status: data.user.status
        };
        
        // 🔥 PASO 3: Guardar en el store
        setUser(userToSave);
        setUserWithPermissions(normalizedUser);
        
        console.log('🎉 ¡LOGIN COMPLETO!', {
          name: normalizedUser.name,
          role: normalizedUser.role?.name,
          permissions: normalizedUser.role?.permissions?.length || 0,
          permissionsData: normalizedUser.role?.permissions
        });
        
        console.log('📋 PERMISOS DETALLADOS:', 
          normalizedUser.role?.permissions?.map(p => ({
            modulo: p.moduleName,
            canRead: p.canRead,
            canWrite: p.canWrite,
            canEdit: p.canEdit,
            canDelete: p.canDelete
          }))
        );
        
      } catch (error) {
        console.error('❌ Error procesando datos del login:', error);
      }
    },
  });

  return {
    loginFn: mutation.mutateAsync,
    isPending: mutation.status === 'pending'
  };
};

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (token: string) => {
    localStorage.setItem('authToken', token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };
  
  return { token, saveToken, removeToken };
} 