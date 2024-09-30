// import { tasks } from "./createTask.js";
import { data } from "./data.js";
import { printSingleTask } from "./printSingleTask.js";
import { filterStatus } from "./main.js";


function printAllTasks() {
  document.getElementById("tasksList");
  tasksList.innerHTML = "";

  if (!data.tasks.length) {
    tasksList.textContent = "No tasks created yet :)";
    return;
  }

  data.tasks
    .filter((singleTask) => {
      if (filterStatus === "all" || !filterStatus) return true;

      // if (filterStatus === "Created") {
      //   return singleTask.status === "created";
      // }
      // if (filterStatus === "Started") {
      //   return singleTask.status === "started";
      // }
      // if (filterStatus === "Completed") {
      //   return singleTask.status === "completed";
      // }

      return singleTask.status === filterStatus;
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

export { printAllTasks };
