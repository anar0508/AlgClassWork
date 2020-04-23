let smt = fetch(`https://financialmodelingprep.com/api/v3/company/profile/AAPL`);
 smt.then((result)=>{return result.json()}).then((result)=>{console.log (result.profile.price)});
