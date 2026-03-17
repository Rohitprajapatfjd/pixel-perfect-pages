import { keepPreviousData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createProduct, getProducts } from '@/api/product.api';
import { CreateProductPayload, ProductsQueryParams } from '@/api/types/product.types';

export const PRODUCT_QUERY_KEYS = {
  list: (params: ProductsQueryParams) => ['products', params] as const,
  infinite: ['products', 'infinite'] as const,
};

export const useProductsQuery = (params: ProductsQueryParams) =>
  useQuery({
    queryKey: PRODUCT_QUERY_KEYS.list(params),
    queryFn: () => getProducts(params),
    staleTime: 2 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    placeholderData: keepPreviousData,
  });

export const useInfiniteProductsQuery = (perPage = 20) =>
  useInfiniteQuery({
    queryKey: PRODUCT_QUERY_KEYS.infinite,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getProducts({ page: pageParam, perPage }),
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page >= lastPage.meta.totalPages) return undefined;
      return lastPage.meta.page + 1;
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProductPayload) => createProduct(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
