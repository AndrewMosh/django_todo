import React, { useState } from "react";
import "./App.css";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
