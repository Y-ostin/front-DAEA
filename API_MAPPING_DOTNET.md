# Mapeo de APIs - Backend .NET

Este documento mapea todos los endpoints del backend .NET con las rutas del frontend.

## 🔐 Auth & Users
- **Auth**: `/api/Auth/*`
  - POST `/api/Auth/login` - Login
- **Users**: `/api/Users/*`
  - GET `/api/Users` - Get all users
  - GET `/api/Users/{id}` - Get user by ID
  - POST `/api/Users` - Create user
  - PUT `/api/Users/{id}` - Update user
  - DELETE `/api/Users/{id}` - Delete user
- **Roles**: `/api/Roles/*`
  - GET `/api/Roles` - Get all roles
  - GET `/api/Roles/{id}` - Get role by ID
  - POST `/api/Roles` - Create role
  - PUT `/api/Roles/{id}` - Update role
  - DELETE `/api/Roles/{id}` - Delete role
- **Modules**: `/api/Modules/*`
  - GET `/api/Modules` - Get all modules
  - GET `/api/Modules/{id}` - Get module by ID

## 💰 Finance
- **Incomes**: `/api/Incomes/*`
- **Expenses**: `/api/Expenses/*`
- **MonasteryExpenses**: `/api/MonasteryExpenses/*`
- **Overheads**: `/api/Overheads/*`
- **FinancialReports**: `/api/FinancialReports/*`
- **FinancialReportsExport**: `/api/FinancialReportsExport/*`

## 📦 Inventory
- **Products**: `/api/inventory/Products/*`
  - GET `/api/inventory/Products` - Get all products
  - GET `/api/inventory/Products/{id}` - Get product by ID
  - GET `/api/inventory/Products/search/{name}` - Search products
  - POST `/api/inventory/Products` - Create product
  - PUT `/api/inventory/Products/{id}` - Update product
  - DELETE `/api/inventory/Products/{id}` - Delete product
- **Categories**: `/api/inventory/Categories/*`
- **Warehouses**: `/api/inventory/Warehouses/*`
- **Suppliers**: `/api/inventory/Suppliers/*`

## 🏭 Production
- **Products**: `/api/production/Products/*`
- **Categories**: `/api/production/Categories/*`
- **Recipes**: `/api/production/Recipes/*`
- **Productions**: `/api/production/productions/*`
- **Losts**: `/api/production/Losts/*`
- **PlantProductions**: `/api/PlantProductions/*`

## 🛍️ Sales
- **Sales**: `/api/sales/*`
  - GET `/api/sales` - Get all sales
  - GET `/api/sales/{id}` - Get sale by ID
  - POST `/api/sales` - Create sale
  - PUT `/api/sales/{id}` - Update sale
  - DELETE `/api/sales/{id}` - Delete sale
- **SaleDetails**: `/api/saleDetail/*`
- **Stores**: `/api/store/*`
  - GET `/api/store` - Get all stores
  - GET `/api/store/{id}` - Get store by ID
  - POST `/api/store` - Create store
  - PUT `/api/store/{id}` - Update store
  - DELETE `/api/store/{id}` - Delete store
- **CashSessions**: `/api/cash_session/*`
  - GET `/api/cash_session` - Get all cash sessions
  - GET `/api/cash_session/{id}` - Get cash session by ID
  - POST `/api/cash_session` - Create cash session
  - PATCH `/api/cash_session/{id}` - Update cash session
  - DELETE `/api/cash_session/{id}` - Delete cash session
- **Returns**: `/api/returns/*`
- **WarehouseStores**: `/api/warehouseStores/*`

## 🏛️ Museum
- **Entrances**: `/api/museum/entrances/*`
- **TypePersons**: `/api/museum/type-persons/*`
- **SalesChannels**: `/api/museum/sales-channels/*`
- **PaymentMethods**: `/api/museum/payment-methods/*`

## 🏠 Rentals
- **Rentals**: `/api/rentals/*`
- **Customers**: `/api/rentals/customers/*`
- **Locations**: `/api/rentals/locations/*`
- **Places**: `/api/rentals/places/*`

## 📝 Notas Importantes

### Diferencias con Backend Node.js:
1. **Rutas con prefijo `/api`** - Todas las rutas llevan el prefijo `/api`
2. **PascalCase en controllers** - `/api/Auth/login` en lugar de `/api/auth/login`
3. **Nomenclatura diferente**:
   - Stores: `/api/store` (singular en .NET)
   - Cash Sessions: `/api/cash_session` (guión bajo en .NET)

### Formato de Respuestas:
- Todas las respuestas de .NET usan **camelCase** en JSON
- Los DTOs tienen propiedades opcionales que pueden ser `null`
- Los IDs son **GUID** (string UUID)
- Las fechas están en formato **ISO 8601**

### Autenticación:
- Header: `Authorization: Bearer {token}`
- El token se obtiene del login y se guarda en `localStorage` como `authToken`
