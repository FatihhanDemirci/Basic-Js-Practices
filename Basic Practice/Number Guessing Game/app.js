const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const run = () => {
  const random = Math.floor(Math.random() * 10);
  const inputVal = input.value;

  if (random == inputVal) {
    result.innerHTML = "You Win!";
  } else {
    result.innerHTML = `You Lose. "Number : ${random}"`;
  }
  input.value = "";
};

btn.addEventListener("click", run);
