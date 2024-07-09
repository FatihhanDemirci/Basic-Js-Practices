const color = ["black", "green", "yellow", "blue", "grey", "orange"];

const row = document.querySelector(".row");

let currentColor;

const colorBox = () => {
  color.forEach((col, index) => {
    currentColor = color[Math.floor(Math.random() * color.length)];
    const div = document.createElement("div");
    div.style.height = "50vh";
    div.style.backgroundColor = `${currentColor}`;
    div.innerText = `${currentColor}`;
    div.className = "col-2";

    row.appendChild(div);
  });
};
colorBox();
