import { Products } from '@/types/product';
import useSWR from 'swr';

export default function useProducts() {
  const { data, error, isLoading } = useSWR<Products>('/products');

  return { 
    data, 
    error, 
    isLoading 
  } 
}
