async function getUserData(id) {
    if (id === 0) {
        throw 'Пользователь не найден';
    }
    else { return {id, name: 'Иван Иванов'}}
}

let user = getUserData(1);
user.then((data)=>{console.log(data)},
    (error)=>{
        console.log(error)
    }
);

let user1 = getUserData(0);
user1.then((data)=>{console.log(data)},
    (error)=>{
        console.log(error)
    }
);


