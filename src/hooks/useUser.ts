import { User } from "@/types/user";
import useSWR from "swr";

export function useUser() {
  return useSWR<User>("/user");
}