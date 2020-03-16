function desiredSum(initialSum, sum) {
    let percent = 12 / 100;
    let partPercent = 7 / 100;
    let years = Math.log(sum / initialSum) / Math.log(1 + percent);
    let monthes = years - Math.round(Math.log(sum / initialSum) / Math.log(1 + percent));
    let savedSum = calculateSum(Math.round(years) *12, initialSum);
    let newMonthes = Math.ceil(Math.log(sum/savedSum) / Math.log(1+partPercent/12));



    return Math.round(years) *12 +newMonthes;
}

console.log("Чтобы накопить данную указанную сумму, вам понадобится " + desiredSum(100, 1000) + 
" месяцев! Из которых 20 лет вычислены по 12 процентой, а 7 месяцев по 7%");


function calculateSum(monthes, initBal) {
    let years = Math.floor(monthes / 12);
    let remMonthes = monthes % 12;
    let bal = initBal;

    bal = bal * Math.pow((1 + 12 / 100), years);
    let remMonthesBal = bal * (7 / 100) * remMonthes / 12;
    return remMonthesBal + bal;
} 