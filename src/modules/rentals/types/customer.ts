// types/customer.ts
export interface Customer {
  id: string
  fullName: string
  dni: number
  phone: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface CreateCustomerRequest {
  fullName: string
  dni: number
  phone: string
  email: string
}

export interface UpdateCustomerRequest {
  fullName?: string
  dni?: number
  phone?: string
  email?: string
}

export interface CustomerResponse {
  success: boolean
  data?: Customer | Customer[]
  message: string
  error?: string
}
