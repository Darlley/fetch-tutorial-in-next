import useSWR from "swr";
import { useUser } from "./useUser";
import { Cart } from "@/types/cart";

export function useCart() {
  const { data } = useUser();

  return useSWR<Cart>(data ? "/cart" : null);
}