document.querySelector('button').addEventListener('click', function () {

    let a ='-1';

    do {
        a = prompt('В каком году разбился Титаник? 1: 1910, 2: 1912, 3: 1914, 4: 1916', '');
        switch (a) {
            case '1':
                alert('Позже');
                break;
            case '3':
            case '4':
                alert('раньше')
                break;
            case '2':
                alert('Правильно!');
                break;
            default:
                alert("Нет таких значений");
        }
    }
    while (a !== '2');
});
