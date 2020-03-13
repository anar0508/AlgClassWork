document.querySelector('button').addEventListener('click', function () {
   let amount= prompt("введите цифру");
   let order = prompt("Введите смоимость покупки");
    

    if (amount >= order) {
        console.log('Успешно!');
        amount = amount - order;
     } 
     console.log('Спасибо за обращение!');
});