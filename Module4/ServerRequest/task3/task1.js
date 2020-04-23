fetch(`https://financialmodelingprep.com/api/v3/stock/real-time-price/`)
    .then(result => result.json())
    .then(result => {
        let symb = result.stockList.reduce((prevRes, currRes) => {
            if (prevRes.price < currRes.price && currRes.symbol !== "BRK.A") return currRes;
            else return prevRes;
        }).symbol;
        return fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symb}`)
    })
    .then(result => result.json())
    .then(result => {
        console.log(`Самая дорогая акция на рынке у компании ${result.profile.companyName}. 
Для покупки одной акции нужно ${result.profile.price} $`)
    });



