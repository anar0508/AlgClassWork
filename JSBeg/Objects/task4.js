document.querySelector('button').addEventListener('click', function () {

    function CreateClient(inName, inBal, depName) {
        return {
            name: inName,
            bal: inBal,
            int: deposits['Deposit ' + depName],
            previous: null,
            next: null
        }
    }

    let deposits = {
        ['Deposit without percent']: 0,
        'Deposit generous': 100,
        'Deposit so so': 1,
        'Deposit norm': 20
    }


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

    client1.next = client2;
    client2.previous = client1;
    client2.next = client3;
    client3.previous = client2;
    client3.next = client4;
    client4.previous = client3;
    client4.next = client5;
    client5.previous = client4;

    console.log(client1);
    console.log(client2);
    console.log(client3);
    console.log(client4);
    console.log(client5);

    function findLast(client) {
        let current = client;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    function findLastRec(client) {
        if (client.next == null) {
            return client;
        } else return findLast(client.next);
    }

    function findFirst(client) {
        let current = client;
        while (current.previous !== null) {
            current = current.previous;
        }
        return current;
    }

    function findFirstRec(client) {
        if (client.previous == null) {
            return client;
        } else return findLast(client.previous);
    }


    console.log(findLast(client2));
    console.log(findLastRec(client2));

    console.log(findFirst(client4));
    console.log(findFirstRec(client4));

});





