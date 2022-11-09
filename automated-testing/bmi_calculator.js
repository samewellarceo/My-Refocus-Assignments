function calculateBMI(weight, height) {
    let bmi = (weight / height**2) * 10000;
    return +bmi.toFixed(2);
}

module.exports = calculateBMI;