export interface ProductAttributes {
  id: string;
  name: string;
  categoryId: string;
  categoryName?: string; // Flattened
  price: number;
  description: string;
  imagenUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductPayload {
  name: string;
  categoryId: string;
  price: number;
  description: string;
  image?: File; // imagen a subir
}

export interface UpdateProductPayload {
  name?: string;
  categoryId?: string;
  price?: number;
  description?: string;
  image?: File; // imagen opcional en edición
}
