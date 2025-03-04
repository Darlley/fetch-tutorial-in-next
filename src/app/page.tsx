"use client"

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('https://dummyjson.com/products').then((res) => res.json())
  })

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  console.log({ ...data })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      products
    </main>
  );
}
