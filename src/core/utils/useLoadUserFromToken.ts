import { useEffect, useState } from 'react';
import { useAuthStore } from '@/core/store/auth';

/**
 * 🔥 HOOK PARA CARGAR USUARIO DESDE TOKEN AL INICIAR LA APP
 * DESHABILITADO: Ya no usamos /auth/me porque el backend .NET no tiene ese endpoint
 * Los permisos se cargan directamente en el login
 */
export const useLoadUserFromToken = () => {
  const { userWithPermissions } = useAuthStore();
  const [isClientReady, setIsClientReady] = useState(false);

  // Asegurar que solo se ejecute en el cliente para evitar hidratación
  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (!isClientReady || typeof window === 'undefined') return;
    
    const token = localStorage.getItem('authToken');
    
    // Si hay token pero no hay permisos, el usuario debe hacer login nuevamente
    if (token && !userWithPermissions) {
      console.log('🔍 Token encontrado pero sin datos de usuario en memoria');
      console.log('🔍 El usuario debe hacer login nuevamente');
    }
    
    if (userWithPermissions?.role?.permissions) {
      console.log('✅ Usuario con permisos cargado:', {
        name: userWithPermissions.name,
        role: userWithPermissions.role?.name,
        permissions: userWithPermissions.role?.permissions?.length || 0
      });
    }
  }, [userWithPermissions, isClientReady]);
};
