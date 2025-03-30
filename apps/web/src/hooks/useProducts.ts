import { useQuery } from 'react-query';
import { getProducts } from '@/api/products';
import { Product } from '@src/types/product';

interface UseProductsOptions {
  enabled?: boolean;
  onSuccess?: (data: Product[]) => void;
  onError?: (error: Error) => void;
}

export const useProducts = (query: string, options?: UseProductsOptions) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', query],
    queryFn: () => getProducts(query),
    enabled: !!query && (options?.enabled !== false),
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchOnWindowFocus: false,
    ...options,
  });
};
