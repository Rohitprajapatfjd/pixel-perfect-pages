import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import {
  CreateProductPayload,
  PaginationResponse,
  Product,
  ProductsQueryParams,
} from '@/api/types/product.types';

export const getProducts = async (params: ProductsQueryParams = {}) => {
  const { data } = await axiosInstance.get<PaginationResponse<Product>>(ENDPOINTS.products.list, { params });
  return data;
};

export const createProduct = async (payload: CreateProductPayload) => {
  const { data } = await axiosInstance.post<Product>(ENDPOINTS.products.create, payload);
  return data;
};

export const getProductById = async (id: string | number) => {
  const { data } = await axiosInstance.get<Product>(ENDPOINTS.products.details(id));
  return data;
};
