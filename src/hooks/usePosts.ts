import { PostType } from "@/types/post";
import useSWR from "swr";

export type FetchPostsType = {
  _page: number
  _limit: number
}
export function usePosts({ _page, _limit }: FetchPostsType) {
  return useSWR<PostType[]>(`/posts?_limit=${_limit}&_page=${_page}`)
}