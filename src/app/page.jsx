import React, { Suspense } from "react";
import AddTodoForm from "./components/addTodoForm";

import Todos from "./components/todos";

const Page = async () => {
  return (
    <div className="container">
      <AddTodoForm />
      <Suspense fallback={<div className="loader">loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
