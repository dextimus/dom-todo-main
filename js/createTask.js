import { data } from "./data.js";

// const firstTask = {
//   id: crypto.randomUUID(),
//   title: "Buy milk",
//   status: "created", // started, completed, created
// };

// const secondTask = {
//   id: crypto.randomUUID(),
//   title: "Eat dinner",
//   status: "started", // started, completed, created
// };

// const thirdTask = {
//   id: crypto.randomUUID(),
//   title: "Study JS",
//   status: "completed", // started, completed, created
// };

// const fourthTask = {
//   id: crypto.randomUUID(),
//   title: "Get beer",
//   status: "completed", // started, completed, created
// };

// let tasks = [firstTask, secondTask, thirdTask, fourthTask];

function createNewTask() {
  const newTask = document.getElementById("newTaskInput").value;

  if (!newTask.trim().length) {
    alert("Please enter a task");
    document.getElementById("newTaskInput").value = "";
    return;
  }

  // localStorage.getItem("tasks", JSON.stringify(tasks));

  data.createTask(newTask);
  // data.tasks.push({
  //   id: crypto.randomUUID(),
  //   title: newTask,
  //   status: "created",
  // });

  document.getElementById("newTaskInput").value = "";
}

export { createNewTask };
