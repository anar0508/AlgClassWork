let currencyRate = {
    USD: 1,
    RUR: 81,
    AZN: 1.7
  }
  
   
  
  let client = {
    USD: 200,
    RUR: 5000,
    AZN: 1500,
    getTotalAmount: function(currency) {
      let total = 0;
      total += this.USD;
      total += this.RUR / currencyRate.RUR;
      total += this.AZN / currencyRate.AZN;
      
      return total * currencyRate[currency];
    }
  }
  
   
  
  console.log(client.getTotalAmount('RUR'));