document.querySelector('button').addEventListener('click', function () {
let amount = +prompt('Введите баланс счёта:','');
let order = +prompt('Введите стоимость')

if (amount > order) {
amount = amount - order;
	alert( 'Успешно!' );
}  
else if (amount < order) {
	alert( 'Недостаточно средств.' );
}
else if (amount==order){
    alert("Операция выполнена успешно, но на счету не осталось средств.");
}
else {
	alert( 'Неверный формат суммы.' );
}
console.log('Спасибо за обращение!'); 
});