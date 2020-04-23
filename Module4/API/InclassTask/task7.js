let but  = document.getElementById('but');
let changeTransaction = ()=> fetch('http://193.124.206.100/api/transaction/8', { 
    method: 'DELETE', 
   
})
.then(res => res.json())
.then(res => {console.log(`Я удалил транзакцию. Теперь ${res.from} перевел клиенту ${res.to} ${res.amount} рублей`)});
but.addEventListener('click', changeTransaction);

