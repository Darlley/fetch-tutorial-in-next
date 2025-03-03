import Posts from "@/components/Posts";
import Products from "@/components/Products";

export default function Home() {

  return (
    <div className="flex h-svh w-full gap-2">
      <Products />
      <Posts />
    </div>
  );
}
