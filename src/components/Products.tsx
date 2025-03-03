"use client";

import useProducts from "@/hooks/useProducts";
import { useCreateProduct } from "@/services/mutation";
import { ChangeEvent, useState } from "react";

export default function Products() {
  const { data, isValidating, isLoading } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  const [inputValue, setInputValue] = useState("");
  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateProduct = async () => {
    // await axiosInstance.post("/products", { title: inputValue });
    // mutate();

    const triggerOptions = {
      optimisticData: data && [
        ...data, 
        { title: inputValue }
      ],
      rollbackOnError: true
    }

    trigger({ title: inputValue }, triggerOptions);
  };

  return (
    <div>
      <p>Products:</p>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input
        placeholder="Product title"
        value={inputValue}
        onChange={handleUpdateInputValue}
        className="text-black"
      />
      <button
        onClick={handleCreateProduct}
        className="px-1 bg-blue-500 ml-2"
      >
        Create Product
      </button>
      
      <div>
        <p>STATE</p>
        {isLoading && <p className="text-red-500">isLoading</p>}
        {isValidating && <p className="text-red-500">isValidating</p>}
        {isMutating && <p className="text-red-500">isMutating</p>}
      </div>
    </div>
  );
}
