const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
var cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let users = [];
let tokens = [];
let clients = [
    {
        id: 1,
        name: 'Bruce',
        aim: 'Batmobile',
        sum: 1000000,
        term: 12
    },
    {
        id: 2,
        name: 'Clark',
        aim: 'Glasses',
        sum: 200,
        term: 6
    },
    {
        id: 3,
        name: 'Barry',
        aim: 'Ring',
        sum: 1000,
        term: 12
    }
]

let id = 4;

function randomString() {
    let resString = '';
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const length = Math.floor(10 + Math.random() * 1000);
    for (let i = 0; i < length; i++) {
        resString += letters[Math.floor(Math.random() * letters.length) - 1];
    }
    return resString;
}

app.get('/credits/:id', (req, res) => {
    const user = clients.find(client => Number(client.id) === Number(req.params.id));
    if (!user) { res.status(404).send() }
    res.status(200).json(user);
});

app.get('/credits', (req, res) => {
    const token = req.get('token');
    console.log(token);
    let userInBase = tokens.find((tok) => { return tok.token === token });
    if (!userInBase) { res.status(401).json({ error: 'Access denied' }); }
    else {
        const count = +req.query.count;
        const offset = +req.query.offset;
        (!count ? res.status(200).json(clients) : res.status(200).send({ users: clients.slice(offset, offset + count), count: clients.length }));
    }
});

app.post('/credits', (req, res) => {

    const { name, aim, sum, term, token } = req.body;
    let userInBase = tokens.find((tok) => { return tok.token === token });
    if (!userInBase) { res.status(401).json({ error: 'Access denied' }); }
    else {
        user = {
            name: name,
            aim: aim,
            sum: +sum,
            term: +term,
            id: id
        }
        id += 1;
        clients.push(user);
        res.status(200).json(user);
    }
});


app.delete('/credits/:id', (req, res) => {
    const { token } = req.body;
    let userInBase = tokens.find((tok) => { return tok.token === token });
    if (!userInBase) { res.status(401).json({ error: 'Access denied' }); }
    else {
        let newClients = clients.filter(el => {
            return Number(el.id) !== Number(req.params.id);
        });
        if (newClients.length === clients.length) {
            res.status(404).send();
        } else {
            let user = clients.find(el => Number(el.id) === Number(req.params.id))
            clients = newClients;
            res.status(200).json(user);
        }
    }
});


app.post('/register', (req, res) => {

    const { login, password } = req.body;
    const hash = bcrypt.hashSync(password, salt)
    user = {
        login: login,
        hash: hash,
        salt: salt
    }
    users.push(user);
    res.status(200).json({
        login: login,
        hash: hash
    });
});

app.post('/token', (req, res) => {
    const { login, password } = req.body;

    const hash = bcrypt.hashSync(password, salt);
    const userInBase = users.find(user => user.login === login && user.hash === hash);
    if (userInBase) {
        const newToken = randomString();
        tokens.push({ login: login, token: newToken });
        res.json({ token: newToken });
    } else {
        res.status(400).json({
            err: 'Can not find user'
        })
    }
})

app.post('/logout', (req, res) => {
    const { token } = req.body;
    let tok1 = tokens.find(tok => {
        return token === tok.token
    });

    if (!tok1) {
        res.status(400).json({
            err: 'Can not find user'
        })
    } else {
        tokens.map(tok => {
            if (token === tok.token)
                return tok.token = ''
        });
        res.send('You are logged out');
    }
})

// app.put('/credits', (req, res) => {
//     let userInd = usersFile.findIndex(el => Number(el.id) === Number(req.body.id));
//     if (userInd !== -1) {
//         const olduser = usersFile[userInd];
//         usersFile[userInd] = { ...olduser};
//         const dataToWrite = JSON.stringify(usersFile);
//         fs.writeFile("./users.json", dataToWrite, () => { });
//         res.json(usersFile.find(el => Number(el.id) === Number(user.id)));
//     }
//     else res.status(404).send();
// });


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});