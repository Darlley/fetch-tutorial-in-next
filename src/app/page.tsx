'use client';

import useCart from '@/hooks/useCart';
import useProducts from '@/hooks/useProducts';
import useUser from '@/hooks/useUser';

export default function Home() {
  const userQuery = useUser();
  const cartQuery = useCart();
  const productsQuery = useProducts();

  if (userQuery?.error) return <div>falhou ao carregar</div>;

  return (
    <div>
      <div>
        <h2>CARTS</h2>
        <p>User name: {userQuery?.isLoading ? "carregando..." : userQuery?.data?.firstName}</p>
        {cartQuery?.data?.carts.map((cart, key) => (
          <ul key={cart.id}>
            <li>
              <p>CART #{cart.id}</p>
              <p>Total R$ {cart.total}</p>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <h2>PRODUCTS</h2>
        {productsQuery?.data?.products.map((product, key) => (
          <ul key={product.id}>
            <li>
              <p>{product.title} - R$ {product.price}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
