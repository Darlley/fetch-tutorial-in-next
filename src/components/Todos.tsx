"use client";
import { useTodos } from "@/hooks/useTodo";
import { Todo } from "@/types/todo";

export default function Todos() {
  const { data, setSize, size } = useTodos();

  if (!data) return "Loading...";

  return (
    <div className="bg-rose-950 p-4 rounded-3xl">
      <h1 className='text-3xl font-bold text-rose-500 mb-4'>INFINITE SCROLL</h1>
      <ul className="flex flex-col space-y-2">
        {data.map((todos: Todo[]) => {
          return todos?.map((todo) => <li key={todo.id}>{todo.title}</li>);
        })}
      </ul>
      <button className="disabled:opacity-50 disabled:text-rose-950 bg-rose-500 p-2 text-rose-100" onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  );
}
