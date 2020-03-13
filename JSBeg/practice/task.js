// подключите данный скрипт к файлу index.js
let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let newDeposit = Number(deposit) + Number(growth);

let messageOne = `Ваш депозит на начало расчетного периода составлял ${deposit} ${currency}`;

let messageTwo = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`;

let messageThree = `К концу расчетного прирост составил ${growth} ${currency} и на данный момент ваш депозит составляет ${newDeposit} ${currency}`;

console.log(messageOne); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(messageTwo); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(messageThree); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

let initial = Number(prompt('Пожалуйста, введите первоначальную сумму'));

let rate = Number(prompt('Пожалуйста, введите ставку'));

let modified = initial + (initial*rate/100);

let messageFour = `Через год у вас будет ${modified} ${currency} на счету`

console.log(messageFour);

