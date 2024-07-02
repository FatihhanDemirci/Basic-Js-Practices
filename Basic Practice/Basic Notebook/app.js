const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const remove = document.querySelector(".remove");

const run = () => {
  form.addEventListener("submit", addNote);
  remove.addEventListener("click", removeNote);
};

const addNote = (e) => {
  const note = input.value.trim();

  if (note == "" || note == null) {
    alert("Please enter a note");
  } else {
    printNote(note);
  }
  e.preventDefault();
};

const printNote = (note) => {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.innerHTML = `<span>${note}</span>`;

  list.appendChild(li);

  input.value = "";
};

const removeNote = () => {
  list.innerHTML = "";
};

run();
