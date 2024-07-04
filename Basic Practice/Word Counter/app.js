const input = document.querySelector(".input");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

const printWord = () => {
  const word = input.value.trim();
  const count = word === "" ? 0 : word.split(/\s+/).length;
  result.textContent = `Kelime Sayısı : ${count}`;
  input.value = "";
};

btn.addEventListener("click", printWord);
