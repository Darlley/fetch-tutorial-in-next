import { User, Users } from '@/types/user';
import useSWR from 'swr';

export default function useUser() {
  const { data, error, isLoading } = useSWR<User>('/user/142');

  return { 
    data, 
    error, 
    isLoading 
  } 
}
