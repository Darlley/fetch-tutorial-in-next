import { Product } from "@/types/product";
import useSWR from "swr";

export default function useProducts() {
  return useSWR<Product[]>("/products");
}
