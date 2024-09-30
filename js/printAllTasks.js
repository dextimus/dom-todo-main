import { data } from "./data.js";
import { filterStatus } from "./main.js";
import { printSingleTask } from "./printSingleTask.js";

function printAllTasks() {
  const searchInput = document.getElementById("seachTaskInput").value;

  document.getElementById("tasksList");
  tasksList.innerHTML = "";

  if (!data.tasks.length) {
    tasksList.textContent = "No tasks created yet :)";
    return;
  }

  data.tasks
    .filter((singleTask) => {
      if (filterStatus === "all" || !filterStatus) return true;

      return singleTask.status === filterStatus;
    })
    .filter((seachedTask) => {
      if (searchInput === " " || !searchInput) return true;
      return seachedTask.title.toLowerCase().includes(searchInput.toLowerCase());
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

export { printAllTasks };
