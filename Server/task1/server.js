const express = require('express');
const app = express();
const fs = require('fs');
const CoinCreator = require('./CoinCreator')


//<http://localhost:3000/coins>

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', (req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
        'Allow': 'GET, POST, PUT, DELETE'
    })
    next();
});

CoinCreator().then(() => {
    let coinsFile;
    fs.readFile("./coins.json", 'utf8', (err, data) => {
        coinsFile = JSON.parse(data);
    })




    app.get('/coins/:id', (req, res) => {
        const user = coinsFile.find(el => el.id === req.params.id);
        if (!user) { res.status(404).send() }
        res.status(200).json(user);
    });

    app.get('/coins', (req, res) => {
        const count = +req.query.count;
        const offset = +req.query.offset;
        (!count ? res.status(200).json(coinsFile) : res.status(200).send({ coins: coinsFile.slice(offset, offset + count), count: coinsFile.length }));
    });

    app.post('/newCoin', (req, res) => {
        const { name, year, price, rarity } = req.body;
        coin = {
            name: name,
            year: year,
            price: price,
            rarity: rarity,
            id: `${name.length}${name[2]}a${year}${Math.floor(Math.random() * 150) + 1}`
        }
        coinsFile.push(coin);
        const dataToWrite = JSON.stringify(coinsFile);
        fs.writeFile("./coins.json", dataToWrite, () => { });
        res.status(200).json(coinsFile.find(el => el.id === coin.id));
    });

    app.put('/changeCoin', (req, res) => {
        let coinInd = coinsFile.findIndex(el => el.id === req.body.id);
        if (coinInd !== -1) {
            const oldCoin = coinsFile[coinInd];
            coinsFile[coinInd] = { ...oldCoin, ...req.body };
            const dataToWrite = JSON.stringify(coinsFile);
            fs.writeFile("./coins.json", dataToWrite, () => { });
            res.json(coinsFile.find(el => el.id === coin.id));
        }
        else res.status(404).send();
    });

    app.delete('/coins/:id', (req, res) => {
        let newCoinsFile = coinsFile.filter(el => {
            return el.id !== req.params.id;
        });
        if (newCoinsFile.length === coinsFile.length) {
            res.status(404).send();
        } else {
            coinsFile = newCoinsFile;
            const dataToWrite = JSON.stringify(coinsFile);
            fs.writeFile("./coins.json", dataToWrite, () => { });
            res.status(200).json(coinsFile.find(el => el.id === req.params.id));
        }
    });


    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
});






