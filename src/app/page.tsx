'use client';

import useProducts from '@/hooks/useProducts';

export default function Home() {
  const { data, error, isLoading } = useProducts('/products');

  if (error) return <div>falhou ao carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  return <pre>{JSON.stringify(data.products[0], null, 2)}</pre>;
}
