import React, { useState } from "react";
import axios from "axios";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title) {
      axios
        .post("http://localhost:8000/api/tasks/", { title })
        .then((response) => {
          onTaskAdded(response.data);
          setTitle("");
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskForm;
