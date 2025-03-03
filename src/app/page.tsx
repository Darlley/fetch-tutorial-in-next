import Posts from "@/components/Posts";
import Products from "@/components/Products";
import Todos from "@/components/Todos";

export default function Home() {

  return (
    <div className="grid grid-cols-3 h-svh w-full p-4 gap-4">
      <Products />
      <Posts />
      <Todos />
    </div>
  );
}
