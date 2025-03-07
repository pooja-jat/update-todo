import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Code Everyday" },
    { id: 2, text: "Revise Everyday" },
    { id: 3, text: "Try Everyday" },
    { id: 4, text: "Repeat Everyday" },
  ]);

  const removeTodo = (id) => {
    // setTodos(
    //   todos.filter((item) => {
    //     if (item.id !== id) {
    //       return true;
    //     }
    //   })
    // );

    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form />
        <ListGroup todos={todos} removeTodo={removeTodo} />
      </div>
    </>
  );
};

export default App;
