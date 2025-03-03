import Cart from "@/components/Cart";
import Posts from "@/components/Posts";
import Products from "@/components/Products";
import Todos from "@/components/Todos";

export default function Home() {

  return (
    <div className="grid grid-cols-4 h-svh w-full p-4 gap-4">
      <Cart />
      <Products />
      <Posts />
      <Todos />
    </div>
  );
}
