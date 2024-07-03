const clock = document.querySelector(".hour");
const minunte = document.querySelector(".min");
const seconds = document.querySelector(".sec");

const date = () => {
  let today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  clock.innerHTML = `
  ${hour}:
  `;
  minunte.innerHTML = `
  ${min}:
  `;
  seconds.innerHTML = `
  ${sec} 
  `;
};

setInterval(date, 1000);
