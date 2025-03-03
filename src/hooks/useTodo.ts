import fetcher from "@/services/fetcher";
import { Todo } from "@/types/todo";
import useSWRInfinite from "swr/infinite";

export type GetKeyType = {
  index: string
  previousPageData: Todo[]
}

export function useTodos() {
  const getKey = (index: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null // atingiu o fim
    return `/todos?_page=${index}&_limit=3`                    // chave SWR
  }

  return useSWRInfinite<Todo[]>(getKey);
}