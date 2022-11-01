function convertCelsiusToKelvin(tempCelsius) {
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

function convertFahrenheitToKelvin(tempFahrenheit) {
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempKelvin;
}

console.log(convertCelsiusToKelvin(84));
console.log(convertFahrenheitToKelvin(95));