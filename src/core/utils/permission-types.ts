// 🔥 TIPOS BASADOS EN TU BACKEND .NET

/**
 * Usuario con información completa de permisos
 * Incluye el rol y sus permisos asociados
 */
export interface UserWithPermissions {
  id: string;
  name: string;
  dni?: string;
  phonenumber?: string;
  email: string;
  roleId: string;
  roleName?: string;
  status: boolean; // Usuario activo/inactivo
  createdAt?: string;
  updatedAt?: string;
  role?: {
    id: string;
    name: string; // Ej: "Admin", "Operador"
    description: string;
    status: boolean; // Rol activo/inactivo
    permissions: Permission[]; // Array de permisos por módulo
    createdAt?: string;
    updatedAt?: string;
  };
  // Soporte para ambos formatos (mayúscula y minúscula)
  Role?: {
    id: string;
    name: string;
    description: string;
    status: boolean;
    Permissions: Permission[];
    createdAt?: string;
    updatedAt?: string;
  };
}

/**
 * Permisos específicos para un módulo
 * Define qué acciones puede realizar el usuario en cada módulo
 */
export interface Permission {
  id: string;
  moduleId: string; // ID del módulo al que aplica
  moduleName?: string; // Nombre del módulo
  canRead: boolean;   // Ver/Leer datos
  canWrite: boolean;  // Crear nuevos registros
  canEdit: boolean;   // Modificar registros existentes
  canDelete: boolean; // Eliminar registros
  createdAt?: string;
  updatedAt?: string;
}

// 🔥 TIPO EXTENDIDO PARA EL ENDPOINT DE USUARIOS (incluye todos los campos del backend)
export interface UserFromAPI {
  id: string;
  name: string;
  phonenumber: string;
  dni: string;
  email: string;
  password: string;
  roleId: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
  Role: {
    id: string;
    name: string;
    description: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    Permissions: Permission[];
  };
}

// 🔥 SISTEMA DINÁMICO DE MÓDULOS
// Los IDs se obtienen automáticamente del backend usando useModulesMap()
// No más UUIDs hardcodeados - todo es dinámico 🚀

// ✅ MODULE_NAMES ahora está centralizado en useModulesMap.ts
// Importar desde allí: import { MODULE_NAMES } from '@/core/utils/useModulesMap';

// Resultado de verificación de permisos (para componentes que muestran feedback)
export interface PermissionResult {
  hasPermission: boolean;
  reason?: string;    // Motivo del rechazo
  module?: string;    // Módulo donde se intentó la acción
  action?: string;    // Acción que se intentó realizar
}
