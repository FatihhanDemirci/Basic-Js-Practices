const form = document.querySelector("#form");
const input = document.querySelector("#weight");
const selectPlanet = document.querySelector("#planet");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textİnput = parseFloat(input.value);
  const planet = selectPlanet.value;

  const planetValue = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
  };

  const resultValue = textİnput * planetValue[planet];

  result.textContent = `Result : ${resultValue}`;
});
