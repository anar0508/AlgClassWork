const accounts = [
    {name:'John Peterson', total:11000, currency:'USD'},
    {name:'Mark Adams', total:7350, currency:'USD'},
    {name:'Richard Collins', total:210000, currency:'USD'},
    {name:'Thomas Moore', total:1000, currency:'USD'},
    {name:'Charles Wood', total:77000, currency:'USD'},
]

let filteredAccounts = accounts.filter((account)=>{return account.total>10000});

let table = document.getElementById('myTable');

for (let acc of filteredAccounts){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = acc["name"];
    cell2.innerHTML = acc["total"];
}
