import React from "react";
import { cookies } from "next/headers";
import { TodoItem } from "./ServerComponents";

const fetchTodo = async (token) => {
  try {
    const res = await fetch(`${process.env.URL}/api/mytask`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();
    if (!data.success) return [];
    return data.tasks;
  } catch (error) {
    return [];
  }
};

const todos = async () => {
  const token = cookies().get("token")?.value;
  const tasks = await fetchTodo(token);
  return (
    <section className="todosContainer">
      {tasks?.map((i) => {
        return (
          <TodoItem
            title={i.title}
            description={i.description}
            id={i._id}
            key={i._id}
            completed={i.isCompleted}
          />
        );
      })}
    </section>
  );
};

export default todos;
