import React, { Suspense } from "react";
import AddTodoForm from "./components/addTodoForm";

import Todos from "./components/todos";

const page = async () => {
  return (
    <div className="container">
      <AddTodoForm />
      <Suspense fallback={<div>loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default page;
