import useSWR from 'swr';

export default function useProducts(url: string) {
  return useSWR(url);
}
