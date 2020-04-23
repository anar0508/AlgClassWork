let smt = fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL,FB,MA`);
smt.then((result) => { return result.json() }).then((result) => {
    
    console.log(result.reduce((prevRes, currRes) => {
        if (prevRes.price < currRes.price) { return currRes.price; }        
        return prevRes;
    }))
});
