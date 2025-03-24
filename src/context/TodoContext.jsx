import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Code Everyday" },
    { id: 2, text: "Revise Everyday" },
    { id: 3, text: "Try Everyday" },
    { id: 4, text: "Repeat Everyday" },
  ]);

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTodo = (text) => {
    setTodos([
      {
        id: crypto.randomUUID(),
        text: text,
      },
      ...todos,
    ]);
  };

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      isEdit: true,
    });
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((item) => (item.id === id ? { id: id, text: newText } : item))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <TodoContext.Provider
      value={{ todos, edit, removeTodo, addTodo, editTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
