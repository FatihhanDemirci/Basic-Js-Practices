const input = document.querySelector(".input");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const randomBtn = document.querySelector(".random-btn");
let choose = [];

const run = () => {
  const inputVal = input.value;
  choose.push(inputVal);
  console.log(choose);
  input.value = "";
};

randomBtn.addEventListener("click", () => {
  const random = choose[Math.floor(Math.random() * choose.length)];

  result.innerHTML = `Seçilen Karar :${random}`;
});

btn.addEventListener("click", run);
