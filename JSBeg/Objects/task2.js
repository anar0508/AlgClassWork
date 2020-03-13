document.querySelector('button').addEventListener('click', function () {

    function CreateClient(inName, inBal, depName) {
        return {
            name: inName,
            bal: inBal,
            int: deposits['Deposit ' + depName]
        }
    }

    //    let name = 'Deposit ' + prompt('Введите название вклада без слова Вклад');



    let deposits = {
        ['Deposit without percent']: 0,
        'Deposit generous': 100,
        'Deposit so so': 1,
        'Deposit norm': 20
    }

    // alert(name in deposits);

    client1 = CreateClient('Peter', 10, 'without percent');
    client2 = CreateClient('Alan', 1000, 'generous');
    client3 = CreateClient('Ron', 6656456, 'so so');
    client4 = CreateClient('Bruce', 545, 'norm');
    client5 = CreateClient('Clark', 51564, 'so so');
    client6 = CreateClient('Diana', 54, 'generous');
    client7 = CreateClient('Hal', 545, 'without percent');
    client8 = CreateClient('Victor', 6666, 'so so');
    client9 = CreateClient('Barry', 18, 'generous');
    client10 = CreateClient('Artur', 18, 'so so');


    console.log(client1);
    console.log(client2);
    console.log(client3);
    console.log(client4);
    console.log(client5);
    console.log(client6);
    console.log(client7);
    console.log(client8);
    console.log(client9);
    console.log(client10);

    function calculate(client) {
        client.bal = client.bal + (client.int * client.bal) / 100;
    }

    calculate(client1);
    console.log(client1);


});





