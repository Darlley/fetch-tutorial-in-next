"use client";

import { useCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";

export default function Cart() {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div className="bg-teal-950 p-4 rounded-3xl">
      <h1 className="text-3xl font-bold text-teal-500 mb-4">CONDITIONAL FETCHING</h1>
      <p>
        username:{" "}
        {userQuery.isLoading ? "Loading..." : userQuery.data?.userName}
      </p>
      <p>
        total cart cost:{" "}
        {cartQuery.data
          ? cartQuery.data.totalCost
          : cartQuery.isLoading
          ? "Loading..."
          : "No user found!"}
      </p>
    </div>
  );
}
