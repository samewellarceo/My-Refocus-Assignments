let amountDesiredToSave = 10000;
let amountSaved = 7500;

let PercentageOfAmountSaved = (amountSaved / amountDesiredToSave) * 100;
let remainingPercentageToSave = 100 - PercentageOfAmountSaved;

intlNumberFormat = new Intl.NumberFormat('en-US')
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${remainingPercentageToSave}% away from your goal of saving P${intlNumberFormat.format(amountDesiredToSave)}.`);