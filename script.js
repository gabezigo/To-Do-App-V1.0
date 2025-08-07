const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

// Load tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let darkMode = localStorage.getItem("darkMode") === "enabled";

// Toggle dark mode UI on load
function applyDarkMode() {
  if (darkMode) {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }
}
applyDarkMode();

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks to the DOM
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = task.text;
    textInput.classList.add("task-text");
    if (task.completed) textInput.classList.add("completed");
    textInput.addEventListener("input", (e) => {
      tasks[index].text = e.target.value;
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete task";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    const actions = document.createElement("div");
    actions.classList.add("task-actions");
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(textInput);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}

// Add new task handler
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text.length === 0) return;
  tasks.push({ text, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
});

// Add task on Enter key in input
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});

// Toggle dark/light mode button
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  applyDarkMode();
});

// Initial render
renderTasks();
