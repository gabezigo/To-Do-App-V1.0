
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

document.body.dataset.theme = localStorage.getItem("theme") || "light";

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  document.body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach(li => {
    tasks.push({ text: li.querySelector("span").textContent, done: li.classList.contains("done") });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach(task => {
    addTask(task.text, task.done);
  });
}

function addTask(text, done = false) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.title = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.title = "Delete";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  if (done) li.classList.add("done");

  taskList.appendChild(li);
  saveTasks();
}

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

loadTasks();
