import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ListItem = ({ todo }) => {
  const { removeTodo, editTodo } = useContext(TodoContext);

  return (
    <li className="list-group-item">
      <p>Id :{todo.id}</p>
      <h3>{todo.text}</h3>
      <span className="float-end">
        <button
          onClick={() => editTodo(todo)}
          className="btn btn-sm btn-warning mx-1 rounded-0"
        >
          Edit
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="btn btn-sm btn-danger rounded-0"
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
