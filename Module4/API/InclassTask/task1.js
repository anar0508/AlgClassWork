fetch(`https://api.ratesapi.io/api/latest?base=USD`).then(result=>result.json()).then(result=>{
    
console.log(`1 ${result.base} = ${result.rates.GBP} GBP`);
    
})

