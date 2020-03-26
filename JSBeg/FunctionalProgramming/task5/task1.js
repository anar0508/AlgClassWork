// Формат исходных данных
const namesArr = [
  'John',
  'Bill',
  'Clara',
  'Ian',
  'Gloria',
  'Bill',
  'Helen',
  'Otto',
  'Gloria'
];

// Код функции для подсчета частот имен
// function countNames(names) {
//   const countNames = {};
//   for (let i = 0; i < names.length; i++) {
//       const curName = names[i];
//       if (curName in countNames) {
//          const curCount = countNames[curName];
//           countNames[curName] = curCount + 1;
//       } else {
//           countNames[curName] = 1;
//       }
//   }
//   return countNames;
// }


console.log(namesArr.reduce(function (prevRes, curr) {

  if (curr in prevRes) {
    prevRes[curr] += 1;
  } else { prevRes[curr] = 1; }
  return prevRes;
}, {}));


// Образец вызова функции
// const countedArr = countNames(namesArr);
// console.log(countedArr);
