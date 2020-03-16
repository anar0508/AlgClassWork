document.querySelector('button').addEventListener('click', function () {
    let client = new CreateClient(45654, 500, true);
    console.log(client);
    
    let client1 = new CreateClient(29596, 500, false);
    console.log(client1);
    
    console.log(update(client, 18));
    console.log(update(client1, 18));
    
    console.log(update(client, 18));
    console.log(update(client1, 18));
    
    function CreateClient(number, dep, meth) {
        return {
            id: number,
            deposit: dep,
            initDeposit: dep,
            method: meth
        }
    }
    
    function update(client, interest) {
    
        if (client.method == true) {
            client.deposit = client.initDeposit * (1 + interest / 100);
            return client
        } else {
        client.deposit *= (1 + interest / 100);
            return client;
        }
    
    }
});