import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light"); // light | dark | gradient

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("gradient");
    else setTheme("light");
  };

  return (
    <div className={`theme-wrapper ${theme}`}>
      <div className="app">
        <h1>📝 My To‑Do List</h1>
        <button onClick={cycleTheme}>
          Switch Theme ({theme})
        </button>
        <TodoList
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;