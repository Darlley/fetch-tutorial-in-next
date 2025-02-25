import { Carts } from '@/types/cart';
import useSWR from 'swr';
import useUser from './useUser';

export default function useCart() {
  const { data: userData } = useUser()
  const { data, error, isLoading } = useSWR<Carts>(userData ? `/carts/user/${userData.id}` : null);

  return { 
    data, 
    error, 
    isLoading 
  } 
}
