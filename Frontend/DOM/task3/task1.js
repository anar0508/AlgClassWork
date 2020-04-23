/**
 * Масств данных о котировках криптовалют
 * name - имя валюты,
 * ticker - сокращение,
 * value - текущее значение цены,
 * change - изменение за последние 24 часа.
 */
const data = [
    { "name": "Биткоин", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Эфириум", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Рипл", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Лайткоин", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Эфириум Классик", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

let drawTable = ((arr) => {
    let table = document.createElement("table");
    document.querySelector('h1').parentElement.appendChild(table);
    let row = table.insertRow(-1);

    let headerCell1 = document.createElement("th");
    let headerCell2 = document.createElement("th");
    let headerCell3 = document.createElement("th");
    let headerCell4 = document.createElement("th");

    headerCell1.innerHTML = 'Название';
    headerCell2.innerHTML = 'Тикер';
    headerCell3.innerHTML = 'Цена';
    headerCell4.innerHTML = 'Изменение за 24 часа';

    row.appendChild(headerCell1);
    row.appendChild(headerCell2);
    row.appendChild(headerCell3);
    row.appendChild(headerCell4);

    for (let el of arr) {
        let row1 = table.insertRow(-1);
        let cell1 = row1.insertCell(0);
        let cell2 = row1.insertCell(1);
        let cell3 = row1.insertCell(2);
        let cell4 = row1.insertCell(3);
        cell1.innerHTML = el.name;
        cell2.innerHTML = el.ticker;
        cell3.innerHTML = el.value;
        cell4.innerHTML = el.change;
    }


});

let addTableStyle = (() => {
    let row = document.querySelector('tr');
    row.style.background = "#8448E0";
    row.style.color = "white";

    let row1 = document.querySelectorAll('tr');
    row1.forEach((el) => {
        let num = +el.lastChild.innerHTML.slice(0, -1);
        if (num < 0) { el.lastChild.className = 'decrease' }
        else if (num > 0) { el.lastChild.className = 'increase' }
    });

});

drawTable(data);
addTableStyle();