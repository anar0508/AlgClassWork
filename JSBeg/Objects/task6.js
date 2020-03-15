document.querySelector('button').addEventListener('click', function () {

    function CreateClient(name, r, d, e) {
        return {
            snp: name,
            depRUB: r,
            depUSD: d,
            depEUR: e
        }
    }
    let client = CreateClient('Ismayilov Anar Ismayil', 500, 300, 400);

    let rub = {
        euro: 80.77,
        usd: 72.38
    }

    console.log(client.snp);
    console.log(client.depRUB);
    console.log(client.depUSD);
    console.log(client.depEUR);

    function Convert(client) {
        client.depEUR = client.depEUR * rub.euro;
        client.depUSD = client.depUSD * rub.usd;
        return client;
    }
    console.clear();

    
    Convert(client);
    console.log(client.depRUB);
    console.log(client.depUSD);
    console.log(client.depEUR);


});