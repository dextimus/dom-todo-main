import { data } from "./data.js";
import {
  getStatusButtonLabel,
  getTaskNextStatus,
} from "./helpers/statusButtonHelpers.js";

function printSingleTask(task, printAllTasks) {
  const taskLi = document.createElement("li");
  const deleteButton = document.createElement("button");
  const statusButton = document.createElement("button");
  const buttonContainer = document.createElement("div");

  const statusButtonLabel = getStatusButtonLabel(task.status);

  // text content
  taskLi.textContent = task.title;
  deleteButton.textContent = "Delete";
  statusButton.textContent = statusButtonLabel;

  // add styles
  taskLi.classList.add("task");
  if (task.status === "started") {
    taskLi.classList.add("task--started");
  }
  if (task.status === "completed") {
    taskLi.classList.add("task--completed");
  }
  // deleteButton.classList.add("deleteButton");
  // statusButton.classList.add("statusButton");
  buttonContainer.classList.add("buttonContainer");

  statusButton.addEventListener("click", () => {
    data.changeTaskStatus(task.id, getTaskNextStatus(task.status));
    printAllTasks();
  });

  deleteButton.addEventListener("click", () => {
    data.deleteTask(task.id);
    printAllTasks();
    console.log(data.tasks);
  });

  if (task.status !== "completed") {
    buttonContainer.appendChild(statusButton);
  }

  buttonContainer.appendChild(deleteButton);
  taskLi.appendChild(buttonContainer);
  document.getElementById("tasksList").appendChild(taskLi);

  // function handleStatusChange(task) {
  //   console.log(task);
  //   data.changeTaskStatus(task.id, getTaskNextStatus(task.status));

  // }

  //   function handleDelete(id) {
  //     const newTasks = data.tasks.filter((task) => task.id !== id);
  //     data.setTasks(newTasks);

  //     console.log(newTasks);
  //   }
}

export { printSingleTask };
