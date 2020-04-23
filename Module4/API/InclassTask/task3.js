fetch('http://193.124.206.100/api/transaction', { method: 'GET' })
.then(res => res.json())
.then(res => {return res.transactions})
.then(res=>{res.map(el=>console.log(`from: ${el.from}
to=${el.to}
amount = ${el.amount}`))});