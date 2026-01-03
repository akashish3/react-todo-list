import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "done" : ""}>
      <span onClick={() => toggleTodo(index)}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}

export default TodoItem;