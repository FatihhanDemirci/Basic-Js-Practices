const vize1 = document.querySelector("#vize1");
const vize2 = document.querySelector("#vize2");
const final = document.querySelector("#final");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const result = document.querySelector("#result");

btn.addEventListener("click", hesapla);

function hesapla() {
  let not1 = vize1.value.trim();
  let not3 = final.value.trim();

  let ortalama = not1 * 0.4 + not3 * 0.6;
  result.value = ortalama;
}
