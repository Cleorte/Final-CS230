const todoList = document.getElementsByClassName("todoList")[0];
const addTodoInput = document.getElementById("addTodo");

addTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTodo();
});

function addTodo() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var deleteIcon = document.createElement("i");

  divParent.className = "todo";
  divParent.innerHTML = addTodoInput.value;

  checkIcon.className = "fa-solid fa-check";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
    divParent.classList.toggle("completed");
  });

  divChild.appendChild(checkIcon);

  deleteIcon.className = "fa-solid fa-trash-can";
  deleteIcon.style.color = "darkgray";
  deleteIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(deleteIcon);

  divParent.appendChild(divChild);

  todoList.appendChild(divParent);

  addTodoInput.value = "";
}
