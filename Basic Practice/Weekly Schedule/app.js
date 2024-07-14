const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const daySelect = document.querySelector(".day-select");
const list = document.querySelector(".list-group");

addBtn.addEventListener("click", () => {
  const text = input.value;
  const selectedDay = daySelect.value;
  if (text === "" || text === null) {
    alert("Please enter a task");
  } else {
    addTask(text, selectedDay);
  }
});

const addTask = (task, day) => {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.innerHTML = `${task}`;

  const deleteLink = document.createElement("a");
  deleteLink.className = "delete-item";
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-remove";
  deleteLink.appendChild(deleteIcon);

  const checkLink = document.createElement("a");
  checkLink.className = "check-item";
  const checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check";
  checkLink.appendChild(checkIcon);

  li.appendChild(checkLink);
  li.appendChild(deleteLink);

  const dayList = document.querySelector(`.${day}`);
  dayList.appendChild(li);
  input.value = "";

  const removeTask = (e) => {
    if (e.target.className === "fa fa-remove") {
      const task = e.target.parentElement.parentElement;
      task.remove();
    }
  };

  const checkTask = (e) => {
    if (e.target.className === "fa fa-check") {
      const task = e.target.parentElement.parentElement;
      task.classList.toggle("checked");
    }
  };

  dayList.addEventListener("click", removeTask);
  dayList.addEventListener("click", checkTask);
};
