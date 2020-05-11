const mysql = require('mysql');
const express = require('express');
const app = express();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mexa1996',
    database: 'bootcamp'
});
connection.connect((err) => {
    if (!err) { console.log('SUCCESS'); }
});


app.get('/client', (req, res) => {
	connection.query('SELECT * FROM clients', (err, data) => {
		if (err) return res.status(500);
		req.json(data);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
