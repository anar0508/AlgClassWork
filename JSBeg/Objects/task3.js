document.querySelector('button').addEventListener('click', function () {

    function createClient(inName, inBal, inDep){
        return {
            name: inName,
            bal: inBal,
            dep: inDep
        }
    }

    client1 = createClient('Peter', 18, 1330);
    client2 = createClient('Alan', 18, 1330);
    client3 = createClient('Ron', 18, 1330);
    client4 = createClient('Bruce', 18, 1330);
    client5 = createClient('Clark', 18, 1330);
    client6 = createClient('Diana', 18, 1330);
    client7 = createClient('Hal', 18, 1330);
    client8 = createClient('Victor', 18, 1330);
    client9 = createClient('Barry', 18, 1330);
    client10 = createClient('Artur', 18, 1330);

    
    let country = prompt('Введите латиницей буквенное обозначение страны, выдавшей пасспорт');
    let number = prompt('Введите номер паспорта');
    let passport ={
        ['passport'+country]: number
    }

    alert(passport['passport'+country]);


});



 

