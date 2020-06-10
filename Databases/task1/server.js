const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mexa1996',
    database: 'bootcamp'
});



app.get('/transactions', (req, res) => {
    let getTransactions = ` SELECT * FROM users`;
    connection.query(getTransactions, (err, data) => {
        if (!err) {
            const count = +req.query.count;
            const offset = +req.query.offset;
            (!count ? res.status(200).json(data) : res.status(200).send({ users: JSON.parse(data).slice(offset, offset + count), count: usersFile.length }))
        }
    })
});

app.get('/transactions/:id', (req, res) => {
    let getTransaction = ` SELECT * FROM bootcamp.transactions WHERE (idTransaction="${connection.escape(req.params.id)}");`;
    connection.query(getTransaction, (err, data) => {
        if (!err) {
            res.status(200).json(data)
        }
    })
});

app.post('/transactions', (req, res) => {
    const { sum, from, to } = req.body;
    let insertTransaction = `INSERT INTO transactions (transSum, fromId, toId) VALUE (${connection.escape(sum)}, ${connection.escape(from)}, ${connection.escape(to)});`;
    let changeBalanсeFrom= `UPDATE bootcamp.users SET balance =  balance - ${connection.escape(sum)} WHERE idUser=${from};`;
    let changeBalanсeTo= `UPDATE bootcamp.users SET balance =  balance + ${connection.escape(sum)}WHERE idUser=${to};`;
    connection.query(insertTransaction, (err, data) => {
        if (!err) {
            res.status(200).send('Transaction has been provided');
            connection.query(changeBalanсeFrom, (err, data) => {console.log('balance is updated');})
            connection.query(changeBalanсeTo, (err, data) => {console.log('balance is updated');})
        } else {
            console.log(err);
        }
    });
});

app.delete('/transactions/:id', (req, res) => {
    let deleteTransaction = `DELETE FROM bootcamp.transactions WHERE (idTransaction=${connection.escape(req.params.id)});`;
    let changeBalanсeFrom= `UPDATE bootcamp.users SET balance =  balance - ${connection.escape(sum)} WHERE idUser=${from};`;
    let changeBalanсeTo= `UPDATE bootcamp.users SET balance =  balance + ${connection.escape(sum)}WHERE idUser=${to};`;
    connection.query(deleteTransaction, (err, data) => {
        if (!err) {
            res.status(200).send('Transaction is deleted');
            connection.query(changeBalanсeFrom, (err, data) => {console.log('balance is updated');})
            connection.query(changeBalanсeTo, (err, data) => {console.log('balance is updated');})
        } else {
            console.log(err);
        }
    });
});


app.get('/users', (req, res) => {
    let getUsers = ` SELECT * FROM users`;
    connection.query(getUsers, (err, data) => {
        if (!err) {
            const count = +req.query.count;
            const offset = +req.query.offset;
            (!count ? res.status(200).json(data) : res.status(200).send({ users: JSON.parse(data).slice(offset, offset + count), count: usersFile.length }))
        }
    })
});

app.get('/users/:id', (req, res) => {
    let getUser = ` SELECT * FROM bootcamp.users WHERE idUser="${connection.escape(req.params.id)}";`;
    connection.query(getUser, (err, data) => {
        if (!err) {
            res.status(200).send('user is found')
        } else {
            console.log(err);
        }
    })
});

app.put('/users/:id', (req, res) => {
    const { fullName, sex, birthday, card_number } = req.body;
    let updateUser = `UPDATE bootcamp.users SET 
    fullName=${connection.escape(fullName)}, 
    sex=${connection.escape(sex)},
    birthday=${connection.escape(birthday)},
    card_number=${connection.escape(card_number)}
    WHERE idUser=${connection.escape(req.params.id)};`;
    connection.query(updateUser, (err, data) => {
        if (!err) {
            res.status(200).send('user is changed')
        } else {
            console.log(err);
        }
    })
});

app.post('/users', (req, res) => {
    const { fullName, sex, birthday, card_number } = req.body;
    let addUser = `INSERT INTO users (fullName, sex, birthday, card_number) VALUES 
    (${connection.escape(fullName)}, ${connection.escape(sex)}, ${connection.escape(birthday)}, ${connection.escape(card_number)} );`;
    connection.query(addUser, (err, data) => {
        if (!err) {
            res.status(200).send('user is created')
        } else {
            console.log(err);
        }
    })
});

app.delete('/users/:id', (req, res) => {
    let deleteUser = `DELETE FROM bootcamp.users WHERE (idUser=${connection.escape(req.params.id)});`;
    connection.query(deleteUser, (err, data) => {
        if (!err) {
            res.status(200).send('user is deleted')
        } else {
            console.log(err);
        }
    });
});

app.get('/history-in/:number', (req, res) => {
    let getHistoryIn = `SELECT 
    transactions.idTransaction,
    transactions.transSum,
    usersFrom.fullname AS fromUser,
    usersTo.fullname AS toUser
FROM
    transactions
        LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
        LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
    WHERE usersTo.card_number=${connection.escape(req.params.number)}
;`;
    connection.query(getHistoryIn, (err, data) => {
        if (!err) {
            res.status(200).json(data);
        } else {
            console.log(err);
        }
    });
});

app.get('/history-out/:number', (req, res) => {
    let getHistoryOut = `SELECT 
    transactions.idTransaction,
    transactions.transSum,
    usersFrom.fullname AS fromUser,
    usersTo.fullname AS toUser
FROM
    transactions
        LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
        LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
    WHERE usersFrom.card_number=${connection.escape(req.params.number)}
;`;
    connection.query(getHistoryOut, (err, data) => {
        if (!err) {
            res.status(200).json(data);
            console.log(data);
            
        } else {
            console.log(err);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
