async function getData () {
  const response = await fetch('https://dummyjson.com/products', {
    cache: 'no-store' // next@15
  })

  if (!response.ok) throw new Error('Failed to fetch data')

  return response.json()
}

export default async function Home() {
  const data = await getData() 
  console.log(data)
  return (
    <div>
      <pre>{JSON.stringify(data.products[0], null, 2)}</pre>
    </div>
  );
}
