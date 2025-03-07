import React from "react";

const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Any Text Here"
        className="form-control rounded-0"
      />
      <button className="btn btn-success my-2 w-100 rounded-0">
        Save Todo
      </button>
    </form>
  );
};

export default Form;
