// Образец исходных данных
const cards = [
  { cardNumber: '7437 4553 9630 3531', name: 'George Washington', expired: '12/22' },
  { cardNumber: '6382 5282 6825 8519', name: 'John Adams', expired: '08/23' },
  { cardNumber: '5418 5162 9272 9262', name: 'Thomas Jefferson', expired: '02/23' },
  { cardNumber: '8652 7262 6283 9723', name: 'James Madison', expired: '11/20' },
  { cardNumber: '8265 6280 7528 0987', name: 'James Monroe', expired: '09/21' },
];

// Образец определения и вызова функций

function find(cards, callbackFunction) {
  let arr = cards.slice();
  for (let i = 0; i < arr.length; i++) {
      if (callbackFunction(arr[i])) {
          return arr[i];
      }
  }
}

console.log(find(cards, function (card) {
  return card.cardNumber == '5418 5162 9272 9262';
}));
//{ cardNumber: '5418 5162 9272 9262', name: 'Thomas Jefferson', expired: '02/23' };

console.log(find(cards, function (card) {
  return card.name == 'Thomas Jefferson';
}));
//{ cardNumber: '5418 5162 9272 9262', name: 'Thomas Jefferson', expired: '02/23' };