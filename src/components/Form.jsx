import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
  const { addTodo, edit, updateTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      updateTodo(edit.todo.id, text);
    } else {
      addTodo(text);
    }

    setText("");
  };
  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Any Text Here"
        className="form-control rounded-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="btn btn-success my-2 w-100 rounded-0">
        Save Todo
      </button>
    </form>
  );
};

export default Form;
