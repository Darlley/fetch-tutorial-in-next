'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Home() {
  const [revalidate, setRevalidate] = useState(0);
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    'https://dummyjson.com/products',
    (...args) => fetch(...args).then((res) => res.json())
  );

  useEffect(() => {
    if (!isValidating) {
      setRevalidate((prev) => prev + 1);
    }
  }, [isValidating]);

  console.log({
    error,
    isLoading,
    isValidating,
  });

  if (error) return <div>falhou ao carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  return <pre>{JSON.stringify(data.products[0], null, 2)}</pre>;
}
