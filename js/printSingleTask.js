import { data } from "./data.js";
import { getStatusButtonLabel, getTaskNextStatus } from "./helpers/statusButtonHelpers.js";

function printSingleTask(task, printAllTasks) {
  const taskLi = document.createElement("li");
  const deleteButton = document.createElement("button");
  const statusButton = document.createElement("button");
  const buttonContainer = document.createElement("div");
  const taskContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const commonContainer = document.createElement("div");

  const statusButtonLabel = getStatusButtonLabel(task.status);


  const myDate = new Date(task.createdAt).toLocaleString("en-GB");

  // text content
  taskContainer.textContent = task.title;
  dateContainer.textContent = myDate;


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

  buttonContainer.classList.add("buttonContainer");
  taskContainer.classList.add("taskContainer");
  dateContainer.classList.add("dateContainer");
  commonContainer.classList.add("commonContainer");

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

  commonContainer.appendChild(dateContainer);
  commonContainer.appendChild(taskContainer);
  taskLi.appendChild(commonContainer);
  buttonContainer.appendChild(deleteButton);
  taskLi.appendChild(buttonContainer);

  document.getElementById("tasksList").appendChild(taskLi);

}

export { printSingleTask };
