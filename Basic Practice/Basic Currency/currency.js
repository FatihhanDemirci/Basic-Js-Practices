class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey={key}&base_currency=";
  }

  async change(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const results = await response.json();
    const rate = amount * results.data[secondCurrency];

    return rate;
  }
}
