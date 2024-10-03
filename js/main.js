import { createNewTask } from "./createTask.js";
import { printAllTasks } from "./printAllTasks.js";
import { printUser } from "./printUser.js";
import { searchTask } from "./searchTask.js";
import { sortByDate } from "./sorting.js";

export let filterStatus = "all";

document.getElementById("createButton").addEventListener("click", () => {
  createNewTask();
  printAllTasks();
});

document.getElementById("newTaskInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    createNewTask();
    printAllTasks();
  }
});

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  printAllTasks();
});

printAllTasks();
printUser();

document.getElementById("searchButton").addEventListener("click", () => {
  searchTask();
  printAllTasks();
});

document.getElementById("sortByDate").addEventListener("change", () => {
  const sortStatus = document.getElementById("sortByDate").value;
  sortByDate(sortStatus);
  printAllTasks();
});
