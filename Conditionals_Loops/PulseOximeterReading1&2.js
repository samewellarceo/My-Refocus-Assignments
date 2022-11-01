function readOxygenSaturation(oxygenSaturation) {
    if(oxygenSaturation >= 96) {
        console.log("Normal Reading.");
    } else if(oxygenSaturation == 95) {
        console.log("Acceptable to continue home monitoring.");
    } else if((oxygenSaturation >= 93) && (oxygenSaturation <= 94)) {
        console.log("Seek advice from health professionals.");
    } else {
        console.log("Seek urgent medical advice.");
    }
}

function readPulseRate(bpm) {
    if((bpm >= 40) && (bpm <= 100)) {
        console.log("Normal Reading.");
    } else if((bpm >= 101) && (bpm <= 109)) {
        console.log("Acceptable to continue home monitoring.");
    } else if((bpm >= 110) && (bpm <= 130)) {
        console.log("Seek advice from health professionals.");
    } else {
        console.log("Seek urgent medical advice.");
    }
}

console.log("Task 1. Pulse oximeter reading (part 1)")
for(let oxygenSaturation = 90; oxygenSaturation <= 100; oxygenSaturation++) {
    readOxygenSaturation(oxygenSaturation);
}

console.log("Task 2. Pulse oximeter reading (part 2)")
for(let bpm = 95; bpm <= 135; bpm++) {
    readPulseRate(bpm);
}