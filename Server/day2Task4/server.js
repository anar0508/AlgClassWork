const express = require('express');
const app = express();
var cors = require('cors')
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use('/', (req, res, next) => {
//     res.set({
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Content-Type': 'application/json',
//         'Allow': 'GET, POST, PUT, DELETE'
//     })

//     next();
// });

let id = 1;
let usersFile;
if (fs.existsSync('./users.json')) {
    fs.readFile("./users.json", 'utf8', (err, data) => {
        usersFile = JSON.parse(data);
        id= Number(usersFile[usersFile.length-1].id)+1;
    })
} else {
    const dataToWrite = JSON.stringify([{ login: 'ManOfSteel', name: 'Kal El', email: 'clark.kent@planet.net', age: '33', id: 0 }]);
    fs.writeFile("./users.json", dataToWrite, () => { });
    fs.readFile("./users.json", 'utf8', (err, data) => {
        usersFile = JSON.parse(data);
    })
}


app.get('/users/:id', (req, res) => {
    const user = usersFile.find(el => Number(el.id) === Number(req.params.id));
    if (!user) { res.status(404).send() }
    res.status(200).json(user);
});

app.get('/users', (req, res) => {
    const count = +req.query.count;
    const offset = +req.query.offset;
    (!count ? res.status(200).json(usersFile) : res.status(200).send({ users: usersFile.slice(offset, offset + count), count: usersFile.length }));
});

app.post('/users', (req, res) => {
    
    const { login, name, email, age } = req.body;
    user = {
        login: login,
        name: name,
        email: email,
        age: age,
        id: id
    }
    id += 1;
    usersFile.push(user);
    res.status(200);
    const dataToWrite = JSON.stringify(usersFile);
    fs.writeFile("./users.json", dataToWrite, () => { });    
});

app.put('/users', (req, res) => {
    let userInd = usersFile.findIndex(el => Number(el.id) === Number(req.body.id));
    if (userInd !== -1) {
        const olduser = usersFile[userInd];
        usersFile[userInd] = { ...olduser};
        const dataToWrite = JSON.stringify(usersFile);
        fs.writeFile("./users.json", dataToWrite, () => { });
        res.json(usersFile.find(el => Number(el.id) === Number(user.id)));
    }
    else res.status(404).send();
});

app.delete('/users/:id', (req, res) => {
    let newusersFile = usersFile.filter(el => {
        return Number(el.id) !== Number(req.params.id);
    });
    if (newusersFile.length === usersFile.length) {
        res.status(404).send();
    } else {
        usersFile = newusersFile;
        const dataToWrite = JSON.stringify(usersFile);
        res.status(200).json(usersFile.find(el => Number(el.id) === Number(req.params.id)));
        fs.writeFile("./users.json", dataToWrite, () => { });
    }
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
