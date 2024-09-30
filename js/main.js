import { createNewTask } from "./createTask.js";
import { printAllTasks } from "./printAllTasks.js";
import { printUser } from "./printUser.js";

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

// function getUserName() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const user = document.getElementById("user");
//     user.textContent = data.name;
//   }).catch((error) => {
//     console.log(error);
//     document.body.innerHTML = "Something went wrong";
//   });
// }
// getUserName();

// AWAIT
