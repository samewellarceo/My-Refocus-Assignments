function computeTip(totalBill) {
    let tipRate = 10
    let tipAmount = totalBill * (tipRate / 100) ;
    return tipAmount;
}

console.log(computeTip(499));
console.log(computeTip(1299));