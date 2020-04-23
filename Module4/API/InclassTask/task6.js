let but  = document.getElementById('but');
let changeTransaction = ()=> fetch('http://193.124.206.100/api/transaction/8', { 
    method: 'PUT', 
    body: JSON.stringify({
        amount:500
    })
})
.then(res => res.json())
.then(res => {console.log(`Я изменил транзакцию. Теперь ${res.from} перевел клиенту ${res.to} ${res.amount} рублей`)});
but.addEventListener('click', changeTransaction);

