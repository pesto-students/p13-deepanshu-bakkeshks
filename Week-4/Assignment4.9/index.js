async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();

    if (data.success) {
      const exchangeRate = data.rates[currencyCode];
      if (exchangeRate !== undefined) {
        return parseFloat(exchangeRate.toFixed(4));
      } else {
        return null; // Currency code not found in response
      }
    } else {
      throw new Error("Failed to fetch exchange rates.");
    }
  } catch (error) {
    throw new Error(
      "An error occurred while fetching exchange rates: " + error.message
    );
  }
}

// Example usage
getExchangeRate("USD")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
