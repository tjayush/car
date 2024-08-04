function predictPrice() {
    // Get form values
    const company = document.getElementById('company').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const fuel = document.getElementById('fuel').value;
    const kilometers = document.getElementById('kilometers').value;
    const currency = document.getElementById('currency').value;

    // Simulate prediction logic
    const basePrice = 5000;
    const yearFactor = (2024 - year) * 500;
    const kilometerFactor = kilometers * 0.1;
    const fuelFactor = fuel === 'electric' ? 2000 : 0;
    let price = basePrice - yearFactor - kilometerFactor + fuelFactor;

    // Currency conversion rates (example rates, adjust as needed)
    const conversionRates = {
        USD: 1,
        INR: 74,
        BDT: 85,
        RUB: 70,
        EUR: 0.85
    };

    // Convert price to selected currency
    price = price * conversionRates[currency];

    // Format price with currency symbol
    const currencySymbols = {
        USD: '$',
        INR: '₹',
        BDT: '৳',
        RUB: '₽',
        EUR: '€'
    };

    // Display the result
    document.getElementById('result').innerText = `Predicted Price: ${currencySymbols[currency]}${price.toFixed(2)}`;
}
