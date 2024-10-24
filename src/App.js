import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", done: false },
    { id: 2, title: "Task 2", done: false },
    { id: 3, title: "Task 3", done: false },
  ]);
  const addHandler = (event) => {};
  const doneHandler = (event) => {
    const id = parseInt(event.target.id);
    const updatedArray = todos.map((item) => {
      return item.id === id ? { ...item, done: true } : item;
    });
    setTodos(updatedArray);
  };
  const deleteHandler = (event) => {
    const id = event.target.id;
    const tmp = todos.filter((item) => {
      return item.id !== parseInt(id);
    });

    setTodos(tmp);
  };
  return (
    <div className="App">
      <Board cards={todos} handlers={{ doneHandler, deleteHandler }} />
    </div>
  );
}

export default App;
