var toDoList = [
  { id: "06/12/1996", content: "Example Task", completed: false },
];

// Load Task List
function loadTask() {
  var display = "";
  var i;

  for (i in toDoList) {
    display +=
      "<li class=\"task\">" +
      toDoList[i].content +
      '</li>';
  }

  document.getElementById("taskList").innerHTML = display;
}

// Add Task
function addTask() {
  var input = document.getElementById("taskInput").value;
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const dateString =
    currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  if (input === "") {
    alert("Error: Empty Task! You must write something!");
  } else {
    var string = input;
    var timeStamp = dateString;
    var bool = false;

    var tempObj = { id: timeStamp, content: string, completed: bool };

    toDoList.push(tempObj);
    console.log(toDoList);

    loadTask();
    taskLeft();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Filters to Completed Tasks Only
function filterCompleted() {
  var filter = document.getElementsByTagName("li");

  for (var i = 0; i < filter.length; i++) {
    if (filter[i].classList.contains("checked")) {
      filter[i].style.display = "";
    } else {
      filter[i].style.display = "none";
    }
  }
}

// Filters Active Tasks Only
function filterActive() {
  var filter = document.getElementsByTagName("li");

  for (var i = 0; i < filter.length; i++) {
    if (filter[i].classList.contains("checked")) {
      filter[i].style.display = "none";
    } else {
      filter[i].style.display = "";
    }
  }
}

// Displays the Number of Tasks Left
function taskLeft() {
  var num = toDoList.length;
  console.log(toDoList.length);
  var display = num + " task(s) left";
  document.getElementById("tasksLeft").innerHTML = display;
}