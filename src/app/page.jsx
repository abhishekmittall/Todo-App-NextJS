import React from "react";
import AddTodoForm from "./components/addTodoForm";
import { TodoItem } from "./components/ServerComponents";

const page = () => {
  return (
    <div className="container">
      <AddTodoForm />
      <section className="todosContainer">
        <TodoItem
          title={"Sample Task"}
          description={"Sample desc"}
          id={"sampleID"}
          completed={false}
        />
      </section>
    </div>
  );
};

export default page;
