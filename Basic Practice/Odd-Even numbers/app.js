document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");
  const result = document.querySelector(".result");

  btn.addEventListener("click", () => {
    let value = parseInt(input.value);

    if (value % 2 == 0) {
      result.textContent = `${value} çift sayıdır`;
    } else {
      result.textContent = `${value} tek sayıdır`;
    }
  });
});
