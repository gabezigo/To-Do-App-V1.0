"strict";

const mainTaskBtn = document.querySelector(".add-task-btn-main");
const btnText = document.querySelector(".btnText");

mainTaskBtn.addEventListener("click", function () {
  if (mainTaskBtn) {
    btnText.style.visibility = "hidden";
    window.open("index.html", "_self");
  }
});
