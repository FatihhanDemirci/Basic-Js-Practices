const input = document.querySelector(".input");
const input1 = document.querySelector(".input1");
const btn = document.querySelector(".income");
const btn1 = document.querySelector(".expense");
const pos = document.querySelector(".pos");
const neg = document.querySelector(".neg");
const result = document.querySelector(".total");
let total = 0;
btn.addEventListener("click", () => {
  let income = input.value;
  let desc = input1.value;
  const h5 = document.createElement("h5");
  h5.textContent = `${desc} :  ${income} $  `;
  pos.appendChild(h5);
  total += parseFloat(income);
  totalResult();
});

btn1.addEventListener("click", () => {
  let expense = input.value;
  let desc = input1.value;
  const h5 = document.createElement("h5");
  h5.textContent = `${desc} : - ${expense} $  `;
  neg.appendChild(h5);
  total -= parseFloat(expense);
  totalResult();
});

const totalResult = () => {
  result.textContent = `Total: ${total} $`;
};
