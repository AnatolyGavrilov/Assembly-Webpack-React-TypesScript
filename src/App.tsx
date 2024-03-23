import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

export const App = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Form />
      <List />
    </div>
  );
};
