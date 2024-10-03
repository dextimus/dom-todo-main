function searchTask() {
  const searchedTask = document.getElementById("seachTaskInput").value;

  if (!searchedTask.trim().length) {
    alert("Please enter a keyword");
    document.getElementById("seachTaskInput").value = "";
    return;
  }
}

export { searchTask };