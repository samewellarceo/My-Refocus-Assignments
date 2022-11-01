let weight_kg = 65;
let height_cm = 177;

function calculateBMI(weight, height) {
    let bmi = (weight / height**2) * 10000;

    return bmi;
}

console.log(calculateBMI(weight_kg, height_cm));