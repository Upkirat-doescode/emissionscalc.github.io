function calculateEmissions() {
    const fuelType = document.getElementById('fuelType').value.toLowerCase();
    const mileage = parseFloat(document.getElementById('mileage').value);
    const kmInput = document.getElementById('kmInput').value.toLowerCase();

    let calckm;
    if (kmInput === 'no') {
        calckm = 12500; // default value, can be changed
    } else {
        calckm = parseFloat(kmInput);
    }

    const fuel = calckm / mileage;
    let emissions;

    if (fuelType === 'diesel') {
        emissions = fuel * 2.68;
    } else if (fuelType === 'petrol') {
        emissions = fuel * 2.31;
    } else if (fuelType === 'cng') {
        emissions = fuel * 2.67;
    }

    const resultElement = document.getElementById('emissionResult');
    resultElement.textContent = `Your average annual carbon emissions are: ${emissions.toFixed(2)} Kg`;
    
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
}
