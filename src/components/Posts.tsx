"use client";

import { FetchPostsType, usePosts } from "@/hooks/usePosts";
import React, { useState } from "react";

export default function Posts() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  
  return (
    <div className="bg-indigo-950 p-4 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-indigo-500">Posts - PAGINATION</h1>
        <div className="flex justify-between items-center gap-2">
          <p>Quantidade: </p>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setLimit(Number(event.target.value))
            }
            value={limit}
            className="text-black"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <ListPosts _page={page} _limit={limit} />

      {/* Esta é uma técnica para pré-renderizar os posts da próxima página */}
      <div className="hidden">
        <ListPosts _page={page + 1} _limit={limit} />
      </div>

      <div className="mt-10 flex justify-between items-center w-full gap-6">
        <button
          className="disabled:opacity-50 disabled:text-indigo-950 bg-indigo-500 p-2 text-indigo-100"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          ⬅️ Anterior
        </button>
        <p>Página {page}</p>
        <button
          className="disabled:opacity-50 disabled:text-indigo-950 bg-indigo-500 p-2 text-indigo-100"
          // disabled={page > Math.ceil((data?.length ?? 0) / limit)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Próxima ➡️
        </button>
      </div>
    </div>
  );
}


function ListPosts({ _page, _limit }: FetchPostsType) {
  const { data, isLoading, error } = usePosts({
    _page,
    _limit,
  });

  if (isLoading) return <p>isLoading</p>;
  if (error) return <p>error {error}</p>;

  return (
    <>
      <ul className="flex flex-col space-y-2">
        {data?.map((post, key) => (
          <li key={key}>- {post?.title}</li>
        ))}
      </ul>

      <div>
        {isLoading && <p className="text-red-500">isLoading</p>}
      </div>
    </>
  );
}
