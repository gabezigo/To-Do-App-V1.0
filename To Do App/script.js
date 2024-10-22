"use strict";
const taskButton = document.querySelector(".add-task-btn");
const incompleteTasksList = document.querySelector(".incomplete-task-list");
const incompleteTasks = document.querySelector(".incompleted-tasks");
const tasks2 = document.querySelector(".completed-1");
const completedTasks = document.querySelector(".completed-tasks");

let completed1 = document.querySelector("#completed-1");
let completed2 = document.querySelector("#completed-2");
let completed3 = document.querySelector("#completed-3");
let completed4 = document.querySelector("#completed-4");
let completed5 = document.querySelector("#completed-5");

let task1 = document.getElementById("task-1");
let task2 = document.getElementById("task-2");
const task3 = document.getElementById("task-3");
const task4 = document.getElementById("task-4");
const task5 = document.getElementById("task-5");
const taskTitle1 = document.querySelector(".task-title-1");
const taskTitle2 = document.querySelector(".task-title-2");
const checkBtn = document.querySelectorAll(".checkbox0");
const checkBtn2 = document.querySelectorAll(".checkbox2");
const tasks = [task1, task2, task3, task4, task5];

let date = document.querySelector(".date");

const toDo1 = document.getElementById("to-do1");
const toDo2 = document.getElementById("to-do2");
const toDo3 = document.getElementById("to-do3");
const toDo4 = document.getElementById("to-do4");
const toDo5 = document.getElementById("to-do5");

const taskDone1 = document.getElementById("task-done1");
const taskDone2 = document.getElementById("task-done2");
const taskDone3 = document.getElementById("task-done3");
const taskDone4 = document.getElementById("task-done4");
const taskDone5 = document.getElementById("task-done5");

const numCompletedTask = document.querySelector(".completed-tasks-text");

const newPageBtn = document.querySelector(".restart-button");

// console.log(numCompletedTask);

let currentDate = new Date();
console.log(date);
let updatedDate = String(currentDate).slice(0, -41);

date.textContent = currentDate;
date.textContent = updatedDate;

newPageBtn.addEventListener("click", function () {
  window.location.reload(false);
});

let numTasksCount = 0;
let clickCount = 0;
for (const btn of checkBtn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    clickCount += 1;
    if (clickCount === 1) {
      console.log("1");
      completed1.style.visibility = "visible";
      taskTitle2.style.visibility = "visible";
      task1.style.visibility = "hidden";

      taskDone1.value = toDo1.value;

      taskDone1.style.fontSize = "14px";
      taskDone1.style.fontWeight = "inherited";
      taskDone1.style.color = "#000";

      // let numTasksCount = 0;
      // numTasksCount++;
      // numCompletedTask.innerHTML = `${numTasksCount} Tasks Completed`; // incompleteTasks.style.display = "visible";
      //   tasks2.style.visibility = "visible";
      //   console.log(task1);
    } else if (clickCount === 2) {
      console.log("2");
      completed2.style.visibility = "visible";
      task2.style.visibility = "hidden";

      taskDone2.value = toDo2.value;

      taskDone2.style.fontSize = "14px";
      taskDone2.style.fontWeight = "inherited";
      taskDone2.style.color = "#000";

      taskDone1.style.fontSize = "14px";
      taskDone1.style.fontWeight = "inherited";
      taskDone1.style.color = "#000";
    } else if (clickCount === 3) {
      console.log("3");
      completed3.style.visibility = "visible";
      task3.style.visibility = "hidden";

      taskDone3.value = toDo3.value;

      taskDone3.style.fontSize = "14px";
      taskDone3.style.fontWeight = "inherited";
      taskDone3.style.color = "#000";
    } else if (clickCount === 4) {
      console.log("4");
      completed4.style.visibility = "visible";
      task4.style.visibility = "hidden";

      taskDone4.value = toDo4.value;

      taskDone4.style.fontSize = "14px";
      taskDone4.style.fontWeight = "inherited";
      taskDone4.style.color = "#000";
    } else if (clickCount === 5) {
      console.log("5");
      completed5.style.visibility = "visible";
      task5.style.visibility = "hidden";

      taskDone5.value = toDo5.value;

      taskDone5.style.fontSize = "14px";
      taskDone5.style.fontWeight = "inherited";
      taskDone5.style.color = "#000";
    }
    numTasksCount++;
    numCompletedTask.innerHTML = `${numTasksCount} Tasks Completed`; // incompleteTasks.
  });
}

// const tasksCompleted = function () {
//   if (taskButton === true) {
//     numTasksCount++;
//     numCompletedTask.innerHTML = `${numTasksCount} Tasks Completed`;
//   }

let count = 0;
taskButton.addEventListener("click", function (e) {
  count += 1;
  if (taskButton && count === 1) {
    // incompleteTasks.style.visibility = "visible";
    // completedTasks.style.visibility = "visible";
    taskTitle1.style.visibility = "visible";
    task1.style.visibility = "visible";
  } else if (taskButton && count === 2) {
    task2.style.visibility = "visible";
  } else if (taskButton && count === 3) {
    task3.style.visibility = "visible";
  } else if (taskButton && count === 4) {
    task4.style.visibility = "visible";
  } else if (taskButton && count === 5) {
    task5.style.visibility = "visible";
  }
});
