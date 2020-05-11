const fetch = require("node-fetch");
const fs = require('fs')


const coinsGenerator = async () => {
    let coins = [];
    let fetchRes = await fetch('https://random-word-api.herokuapp.com/word?number=1000');
    let jsonRes = await fetchRes.json();
    for (let i = 0; i < 1000; i++) {
        let coin = {
            name: jsonRes[i],
            year: Math.floor(Math.random() * 1000) + 1020,
            price: (Math.random() * 1000 + 500).toFixed(2),
            rarity: Math.floor(Math.random() * 2) + 1 === 1 ? 'very rare' : 'common',
            id: `${jsonRes[i].length}${jsonRes[i][2]}a${i}${Math.floor(Math.random() * 150) + 1}`
        }
        coins.push(coin)
    }

    const dataToWrite = JSON.stringify(coins);

    fs.writeFile("./coins.json", dataToWrite, () => { });
}

module.exports = coinsGenerator;