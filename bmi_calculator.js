function calculateBMI(weight, height) {
    let bmi = (weight / height**2) * 10000;
    return +bmi.toFixed(2);
}

function testCalculateBMI() {
    const result = calculateBMI(66, 177);
    const expected = 21.07;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}.`
    )
}

testCalculateBMI();