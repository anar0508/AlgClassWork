const express = require('express');
const app = express();
const fs = require('fs');


//<http://localhost:3000/coins>

app.get('/current-time', (req, res) => {
    let d = new Date();
   
    res.json(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
