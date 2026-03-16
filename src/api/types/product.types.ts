export interface Product {
  id: number | string;
  name: string;
  price: number;
  sku?: string;
  description?: string;
  createdAt?: string;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface PaginationResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ProductsQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface CreateProductPayload {
  name: string;
  price: number;
  sku?: string;
  description?: string;
}
