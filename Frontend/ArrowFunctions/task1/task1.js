class CurrencyConverter{
    constructor (rate){
        this.rate =rate;
    }
    convertAll = (arr)=> {
     return arr.map((n)=>{return n*this.rate});
    }
}

let converter = new CurrencyConverter(1.2);

let toConvertArray = [1, 5];
console.log (converter.convertAll(toConvertArray));