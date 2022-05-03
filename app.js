// Change header text colors
document.getElementById("top-header").style.color = "#a0522d";
document.getElementById("bottom-header").style.color = "#a0522d";

// Input current date at bottom of card
const date = new Date();
document.body.append(date);

// Define UI variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector(".btn-add");
const taskList = document.querySelector(".taskList");
const taskAddedBtn = document.querySelector("span");
const deleteList = document.querySelector(".btn-clear");

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
  form.addEventListener("submit", addTask);
  addTaskBtn.addEventListener("click", addedBtn);
  taskList.addEventListener("click", removeTask);
  deleteList.addEventListener("click", dumpAll);
}

// Add task, style and append li with delete btn span
function addTask(e) {
  const li = document.createElement("li");
  li.className = "taskList-item";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.padding = "0 3px";
  li.appendChild(document.createTextNode(taskInput.value));

  // Style and place x in li when generated to deletion
  const deleteX = document.createElement("span");
  const delX = "&times;";

  deleteX.className = "spanX";
  deleteX.style.cursor = "pointer";
  deleteX.style.color = "#b22222";
  deleteX.style.fontWeight = "bold";

  li.appendChild(deleteX).innerHTML = delX;
  taskList.appendChild(li);

  taskInput.value = "";

  // Alternating background colors of tasks using 2 different loops
  const liOdd = document.querySelectorAll("li:nth-child(odd)");
  const liEven = document.querySelectorAll("li:nth-child(even)");

  // 2 different loop types to do the same thing
  liOdd.forEach(function (li) {
    li.style.background = "#f4f4f4f4";
  });

  for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#ccc";
  }
  e.preventDefault();
}

// Add Task Added button and hide after 2 seconds
function addedBtn() {
  if (`${(taskInputTxt = !"")}`) {
    const addBtnDiv = document.querySelector(".addBtn");
    taskAddedBtn.className = "btn taskAdded";
    taskAddedBtn.innerText = "Task Added";
    addBtnDiv.appendChild(taskAddedBtn);

    setTimeout(() => {
      taskAddedBtn.remove();
    }, 2000);
  }
}

// Remove individual task li
function removeTask(e) {
  if (e.target.classList.contains("spanX")) {
    e.target.parentElement.remove();
  }
}

// Clear the task list
// Change Clear All button text when clicked and revert to previous state
function dumpAll(e) {
  let x = confirm("Are You Sure?");
  if (x == true) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    const clearAllBtn = document.querySelector(".btn-clear");
    const btnClone = clearAllBtn.cloneNode();
    e.target.innerText = "Done";

    setTimeout(() => {
      clearAllBtn.replaceWith(btnClone);
      btnClone.innerHTML = "Clear All";
    }, 2000);
  } else {
    return;
  }
  window.location.reload();
}
