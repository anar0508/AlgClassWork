let but  = document.getElementById('but');
let changeTransaction = ()=> fetch('http://193.124.206.100/api/transaction/', { 
    method: 'POST', 
    body: JSON.stringify({
        from: 'Someone',
        to: 'Anybody',
        amount: 1002
    })
})
.then(res => res.json())
.then(res => {console.log(`Клиент ${res.from} перевел клиенту ${res.to} ${res.amount} рублей`)});
but.addEventListener('click', changeTransaction);

