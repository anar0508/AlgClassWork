document.querySelector('button').addEventListener('click', function () {
    let amount = +prompt('Введите баланс счёта:', '');
    alert(amount >= 1000000 ? "вы миллионер" : "Вы пока не миллионер");
    });