import useProducts from "@/hooks/useProducts"
import useSWRMutation from "swr/mutation"
import { axiosInstance } from "./fetcher"

type FetcherArgs = { 
  arg: {
    title: string
  } 
};

export const useCreateProduct = () => {
  const { mutate } = useProducts()

  return useSWRMutation("/products", async ( url: string, { arg }: FetcherArgs ) => {
    await axiosInstance.post(url, { title: arg.title });
  }, {
    onError(err) {
      console.error(err);
    },
    onSuccess: () => {
      mutate();
    },
  })
}