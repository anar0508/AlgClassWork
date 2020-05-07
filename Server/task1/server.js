const express = require('express');
const app = express();
const fs = require('fs');
const CoinCreator = require('./CoinCreator')


//<http://localhost:3000/coins>


CoinCreator().then(() => {
    let coinsFile;
    fs.readFile("./coins.json", 'utf8', (err, data) => {
        coinsFile = JSON.parse(data);
    })

    app.get('/coins/:id', (req, res) => {
        res.json(coinsFile.find(el => el.id == Number(req.params.id)));
    });

    app.get('/coins', (req, res) => {
        const count = +req.query.count;
        const offset = +req.query.offset;
        (!count ? res.json(coinsFile) : res.send({ coins: coinsFile.slice(offset, offset + count), count: coinsFile.length }));
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');

    });
});






