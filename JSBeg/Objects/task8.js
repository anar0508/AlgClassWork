document.querySelector('button').addEventListener('click', function () {

    function CreateClient(name, r, d, e) {
        return {
            snp: name,
            depRUB: r,
            depUSD: d,
            depEUR: e
        }
    }

    function CreateCurrency(currency, rate) {
        rub[currency]=rate;
    }
    

    function Convert(client, cur) {
        switch (cur) {
            case 'eur':
                client.depRUB = Math.round((client.depRUB / rub.euro) * 100) / 100;
                client.depUSD = Math.round((client.depUSD / (rub.euro/rub.usd)) * 100) / 100;
                return client;
                break;
            case 'rub':
                client.depEUR = client.depEUR * rub.euro;
                client.depUSD = client.depUSD * rub.usd;
                return client;
                break;
            case 'usd':
                client.depRUB = Math.round((client.depRUB / rub.usd) * 100) / 100;;
                client.depEUR = Math.round((client.depEUR / (rub.usd/rub.euro)) * 100) / 100;
                return client;
                break;
        }
    }

    let client = CreateClient('Ismayilov Anar Ismayil', 500, 300, 400);

    let rub = {
        euro: 80.77,
        usd: 72.38
    }

    // let cur = prompt('Введите, пожалуйста, трёхбуквенное обозначение валюты и мы переведём все ваши вклады в данную валюту.').toLowerCase();
    // Convert(client, cur);
    // console.log('На рублёвом счету' + ' ' + client.depRUB + ' ' + cur);
    // console.log('На долларовом счету' + ' ' + client.depUSD + ' ' + cur);
    // console.log('На евро счету' + ' ' + client.depEUR + ' ' + cur);
    
    let curName = prompt('Пожалуйста, введите трёхбуквенное обозначение новой валюты.');
    let curRate = +(prompt('Пожалуйста, введите курс по отношению к рублю.'));
    
    CreateCurrency(curName, curRate);
    console.log(rub[curName]);
    
     
});