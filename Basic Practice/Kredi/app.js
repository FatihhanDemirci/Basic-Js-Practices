const miktar = document.querySelector("#kredi-tutar");
const vade = document.querySelector("#vade");
const btn = document.querySelector(".btn");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

btn.addEventListener("click", () => {
  const tutar = miktar.value.trim();
  const options = vade.options;
  const taksit = vade.options[options.selectedIndex].value;

  let guncelTutar;

  if (taksit == 12) {
    guncelTutar = tutar * 1.1;
  } else if (taksit == 24) {
    guncelTutar = tutar * 1.2;
  } else if (taksit == 36) {
    guncelTutar = tutar * 1.3;
  } else if (taksit == 48) {
    guncelTutar = tutar * 1.4;
  }

  result1.innerHTML = ` 
  Ödeme Toplamı : ${guncelTutar.toFixed(2)}TL 
`;

  result2.innerHTML = `
       Taksit Tutarı : ${(guncelTutar / taksit).toFixed(2)} TL`;
});
