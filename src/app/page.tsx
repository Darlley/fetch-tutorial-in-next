'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const data = fetch('https://dummyjson.com/products', {
      cache: 'no-store', // next@15
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return <pre>{JSON.stringify(products?.[0], null, 2)}</pre>;
}
