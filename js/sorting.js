import { data } from "./data.js";

function sortByDate(sortStatus) {
  if (sortStatus === "asc") {
    data.tasks.sort((a, b) => a.createdAt - b.createdAt);
  }
  if (sortStatus === "desc") {
    data.tasks.sort((a, b) => b.createdAt - a.createdAt);
  }
}

export { sortByDate };