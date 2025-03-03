import { Carts } from "@/types/cart";

import useSWR from "swr";
import useUser from "./useUser";

export default function useCart() {
  const { data } = useUser();
  return useSWR<Carts>(data ? "/cart" : null);
}
