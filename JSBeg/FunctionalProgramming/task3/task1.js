const clients = [
    { name: 'Anar Ismayilov', birthDate: '05.08.1993' },
    { name: 'Mehriban Aliyeva', birthDate: '27.02.1996' },
    { name: 'Vugar Ismayilov', birthDate: '31.03.1999' },
    { name: 'Ismayil Ismayilov', birthDate: '22.07.1967' },
    { name: 'Zenfira Ismayilova', birthDate: '12.01.1971' },
];

function map(array, callbackFunction) {
    let arr = array.slice();
    let arrWithData=[];
    for (let i = 0; i<arr.length; i++){
        arrWithData.push(callbackFunction(arr[i]));
    }
    return arrWithData;
}
function getNameOfClient(client) {
    return client.name;
}
function getBirthYear(client) {
    return client.birthDate;
}

console.log(map(clients, getNameOfClient)); // ['John', 'Bill', 'Clara', 'Ian'] 
console.log(map(clients, getBirthYear)); // [1974, 1985, 1994, 1940]