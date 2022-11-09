const calculateBMI = require("./bmi_calculator.js");

test("Checks if BMI of 66kg and 177cm is 20.07", () => {
    expect(calculateBMI(66, 177)).toBe(21.07);
});

test("Checks if BMI of (String)66kg and 177cm is 20.07", () => {
    expect(calculateBMI("66", 177)).toBe(21.07);
});

test("Checks if BMI of (String)66kg and (String)177cm is 20.07", () => {
    expect(calculateBMI("66", "177")).toBe(21.07);
});