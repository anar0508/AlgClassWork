document.querySelector('button').addEventListener('click', function () {

    let bank = {
    }

    let rub = {
    }

    let client = CreateClient('Anar Ismailov');
    bank[client.snp] = client;

    client = CreateClient('Javid');
    bank[client.snp] = client;

    let curName = prompt('Пожалуйста введите 3ёхбуквенное название валюты').toUpperCase();
    let curRate = +prompt('Пожалуйста введите курс по отношению к рублю');
    CreateCurrency(curName, curRate);
    CreateCurrency("AZN", 42.72);

    client = CreateClient('Mehriban');
    bank[client.snp] = client;
    console.log(rub);
    console.log(bank['Javid']);
    console.log(bank);

    function CreateClient(name) {
        result = { snp: name };
        deposits = {};
        for (const cur in rub) {
            deposits['dep' + cur] = 0;
        }
        Object.assign(result, deposits);
        return result;
    }

    function CreateCurrency(currency, rate) {
        rub[currency] = rate;
        for (let client in bank) {
            bank[client]['dep' + currency] = 0;
        }
    }

    function Convert(client, cur) {
        switch (cur) {
            case 'eur':
                client.depRUB = Math.round((client.depRUB / rub.euro) * 100) / 100;
                client.depUSD = Math.round((client.depUSD / (rub.euro / rub.usd)) * 100) / 100;
                return client;
                break;
            case 'rub':
                client.depEUR = client.depEUR * rub.euro;
                client.depUSD = client.depUSD * rub.usd;
                return client;
                break;
            case 'usd':
                client.depRUB = Math.round((client.depRUB / rub.usd) * 100) / 100;;
                client.depEUR = Math.round((client.depEUR / (rub.usd / rub.euro)) * 100) / 100;
                return client;
                break;
        }
    }

    // let cur = prompt('Введите, пожалуйста, трёхбуквенное обозначение валюты и мы переведём все ваши вклады в данную валюту.').toLowerCase();
    // Convert(client, cur);
    // console.log('На рублёвом счету' + ' ' + client.depRUB + ' ' + cur);
    // console.log('На долларовом счету' + ' ' + client.depUSD + ' ' + cur);
    // console.log('На евро счету' + ' ' + client.depEUR + ' ' + cur);

});