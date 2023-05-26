import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const randomNumber = Math.random() * 100;
  const addTodo = (todo) => {
    setTodos([...todos, { task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };
  return (
    <>
      <TodoForm addTodo={addTodo} />
      {/* <Todo /> */}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </>
  );
};
export default TodoWrapper;
