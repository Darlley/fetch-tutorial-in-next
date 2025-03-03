import { User } from "@/types/user";
import useSWR from "swr";

export default function useUser() {
  return useSWR<User>("/user");
}
