import { Product } from "@/types/product";
import { logger } from "@/utils/logger";
import useSWR from "swr";

export default function useProducts() {
  return useSWR<Product[]>("/products", { use: [ logger ]});
}
