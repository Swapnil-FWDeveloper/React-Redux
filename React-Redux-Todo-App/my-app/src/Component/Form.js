import React, { useState } from "react";

const Form = () => {
  const [todovalue, setTodoValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let date = new Date();
    let time = date.getTime();

    let todoObj = {
      id: time,
      todo: todovalue,
      completed: false,
    };
    setTodoValue("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todovalue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
