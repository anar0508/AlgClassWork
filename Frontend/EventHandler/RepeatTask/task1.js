const list = document.querySelector('#shopping-list-container')  
const el = list.querySelectorAll('#list-item');

let buy = numb=> el[numb].classList.add('done');


buy(0);
buy(2);