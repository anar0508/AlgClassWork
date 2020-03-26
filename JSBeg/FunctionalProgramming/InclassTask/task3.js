// Образец структуры данных
const cards = [
    { cardNumber: '4437 4553 9630 3531', name: 'George Washington', expired: '12/22' },
    { cardNumber: '5382 5282 6825 8519', name: 'John Adams', expired: '08/23' },
    { cardNumber: '5418 5162 9272 9262', name: 'Thomas Jefferson', expired: '02/23' },
    { cardNumber: '4652 7262 6283 9723', name: 'James Madison', expired: '11/20' },
    { cardNumber: '4265 6280 7528 0987', name: 'James Monroe', expired: '09/21' },
];

// Образец определения и вызова функций
function filterCreditCards(creditCards, callbackFunction) {
    let arr = creditCards.slice();
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callbackFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function checkCardExpiredYear(card) {
    let year = +(card.expired[card.expired.length - 2] + card.expired[card.expired.length - 1])
    if (year>21){
        return true;
    }
}

function checkCardType(card) {
    let type = +(card.cardNumber.charAt(0));
    if (type === 4){
        return true;
    }
}

console.log(cards.filter(checkCardExpiredYear));
console.log(cards.filter(checkCardType));