import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Popup from "./components/popup/Popup";

function App() {
  const [task, setTask] = useState("");
  const [popupState, setPopupState] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", done: false },
    { id: 2, title: "Task 2", done: false },
    { id: 3, title: "Task 3", done: false },
  ]);
  const addHandler = () => {
    if (task === "") {
      return;
    }
    let id = 0;
    for (var i = 0; i < todos.length; i++) {
      if (i + 1 !== todos[i].id) {
        id = i + 1;
      }
    }
    setTodos((preTodos) => {
      return [...preTodos, { id: id, title: task, done: false }];
    });
    setPopupState(false);
    setTask("");
  };
  const valueChanged = (event) => {
    setTask(event.target.value);
  };

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

  const closePopup = () => {
    setPopupState(false);
  };
  const openPopup = () => {
    setPopupState(true);
  };
  return (
    <div className="App">
      <Board
        cards={todos}
        openPopup={openPopup}
        handlers={{ doneHandler, deleteHandler }}
      />
      <Popup
        addHandler={addHandler}
        task={task}
        valueChanged={valueChanged}
        popupState={popupState}
        closePopup={closePopup}
      />
    </div>
  );
}

export default App;
