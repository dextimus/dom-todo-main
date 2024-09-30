import {data } from "./data.js";

function searchTask(printAllTasks) {
  const searchedTask = document.getElementById("seachTaskInput").value;

  if (!searchedTask.trim().length) {
    alert("Please enter a keyword");
    document.getElementById("seachTaskInput").value = "";
    return;
  }
  const filteredTasks = data.tasks.filter((task) => {
    return task.title.toLowerCase().includes(searchedTask.toLowerCase());
  });
  printAllTasks(filteredTasks);
  console.log(filteredTasks)
}

export { searchTask };
