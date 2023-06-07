import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    setValue("");
  };
  return (
    <>
    
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter your todays task"
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
export default TodoForm;
