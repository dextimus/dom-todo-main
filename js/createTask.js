import { data } from "./data.js";

function createNewTask() {
  const newTask = document.getElementById("newTaskInput").value;

  if (!newTask.trim().length) {
    alert("Please enter a task");
    document.getElementById("newTaskInput").value = "";
    return;
  }

  data.createTask(newTask);

  document.getElementById("newTaskInput").value = "";
}

export { createNewTask };
