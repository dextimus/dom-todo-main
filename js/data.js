const mocData = [
  {
    id: crypto.randomUUID(),
    title: "Buy milk",
    status: "created", // started, completed, created
  },

  {
    id: crypto.randomUUID(),
    title: "Eat dinner",
    status: "started", // started, completed, created
  },

  {
    id: crypto.randomUUID(),
    title: "Study JS",
    status: "completed", // started, completed, created
  },

  {
    id: crypto.randomUUID(),
    title: "Get beer",
    status: "completed", // started, completed, created
  },
];

export const data = {
  // tasks: [...mocData],
  tasks: [],
  getTasks: function () {
    const response = JSON.parse(localStorage.getItem("tasks"));
    if (response && Array.isArray(response)) {
      this.tasks = response;
    } // Array tikrina ar tai yra masyvas
    console.log(response);
  },

  setTasks: function (newTasks) {
    if (newTasks) {
      this.tasks = newTasks;
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setTasks();
  },

  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    this.setTasks();
  },

  createTask: function (title) {
    this.tasks.push({
      id: crypto.randomUUID(),
      title: title,
      status: "created",
    });
    this.setTasks();
  },
};

data.getTasks();

