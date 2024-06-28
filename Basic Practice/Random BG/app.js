const btn = document.querySelector(".btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  let color1 = Math.round(Math.random() * 255);
  let color2 = Math.round(Math.random() * 255);
  let color3 = Math.round(Math.random() * 255);
  body.style.backgroundColor = `rgb(${color1},${color2},${color3}) `;
});
