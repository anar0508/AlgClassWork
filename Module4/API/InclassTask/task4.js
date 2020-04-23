fetch('http://193.124.206.100/api/transaction?to=B', { method: 'GET' })
.then(res => res.json())
.then(res => {return res.transactions})
.then(res=>{console.log(res.reduce((prev, curr)=>{return prev.amount+curr.amount}))});