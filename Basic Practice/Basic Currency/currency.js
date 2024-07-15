class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JhvEkRsWGy0EVotKHrNS8osKqXPGufHg5ya9w0dQ&base_currency=";
  }

  async change(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const results = await response.json();
    const rate = amount * results.data[secondCurrency];

    return rate;
  }
}
