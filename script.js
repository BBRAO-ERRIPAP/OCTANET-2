function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.innerHTML = '<input type="checkbox" onclick="toggleComplete(this)">' + taskText + '<button class="delete-button" onclick="deleteTask(this)">Delete</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function deleteTask(deleteButton) {
    var listItem = deleteButton.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  
  function toggleComplete(checkbox) {
    var listItem = checkbox.parentNode;
    if (checkbox.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  }
  