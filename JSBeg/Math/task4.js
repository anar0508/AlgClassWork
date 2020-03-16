function desiredSum(initialSum, sum) {
    let percent = 12 / 100;
    let partPercent = 7 / 100;
    let years = Math.round(Math.log(sum / initialSum) / Math.log(1 + percent));
    let monthes = Math.floor(12*Math.round(Math.log(sum / initialSum)/Math.log(1 + percent) * 10) / 10 - years);
    let remSum = sum - calculateSum(years * 12, initialSum);
    let newMonthes = Math.floor(Math.log(remSum) / Math.log(partPercent));
    console.log(newMonthes);
    // let remMonthesBal = bal * (7 / 100)*monthes/12;


    return years;
}

console.log(desiredSum(100, 1000));


function calculateSum(monthes, initBal) {
    let years = Math.floor(monthes / 12);
    let remMonthes = monthes % 12;
    let bal = initBal;

    bal = bal * Math.pow((1 + 12 / 100), years);
    let remMonthesBal = bal * (7 / 100) * remMonthes / 12;
    return remMonthesBal + bal;
} 