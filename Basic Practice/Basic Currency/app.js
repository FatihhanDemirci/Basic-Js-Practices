const amountInput = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrencyOption");
const secondCurrency = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#results");

const currency = new Currency();
runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", convertCurrency);
}

function convertCurrency() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstCurrency.options[firstCurrency.selectedIndex].textContent;
  const secondOptionValue =
    secondCurrency.options[secondCurrency.selectedIndex].textContent;

  currency
    .change(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result;
      resultInput.value = result.toFixed(3);
    });
}
