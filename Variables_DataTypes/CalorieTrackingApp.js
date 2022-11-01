let caloriesBurnedPerHour = 450;
let numOfDaysCycled = 15;
let cyclingHoursPerDay = 0.5;

let totalHoursOfCycling = cyclingHoursPerDay * numOfDaysCycled;
let totalCaloriesBurned = caloriesBurnedPerHour * totalHoursOfCycling;

console.log(`Great work, Sam! After ${cyclingHoursPerDay} hours of cycling every day for a week, you may lose a total of ${totalCaloriesBurned} calories.`);