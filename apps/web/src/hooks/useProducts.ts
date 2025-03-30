import { useQuery } from 'react-query';
import { getProducts } from '@/api/products';
import { Product } from '@src/types/product';

interface UseProductsOptions {
  enabled?: boolean;
  onSuccess?: (data: Product[]) => void;
  onError?: (error: Error) => void;
}

export const useProducts = (options?: UseProductsOptions) => {
  console.log('useProducts');
  return useQuery<Product[], Error>({
    queryKey: ['products'], // Eliminamos la dependencia de `query`
    queryFn: () => getProducts(), // Cargamos todos los productos
    staleTime: 5 * 60 * 1000, // Datos frescos durante 5 minutos
    refetchOnWindowFocus: false,
    ...options,
  });
};