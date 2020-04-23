class FinanceBackendEmulation {
    constructor() {
        console.log("Работает эмулятор серверных данных. Не используйте это на production");
    }
    async getAvailableCurrencies() {
        return ["USD", "EUR"];
    }
    async getRate(currencyFrom, currencyTo) {
        // let res1 = this.getAvailableCurrencies().then((result) => { return result });
        let res = await this.getAvailableCurrencies();
        // console.log(res);
        // console.log(res1);
        if (res.includes(currencyFrom)
            && res.includes(currencyTo)) {
            if (currencyFrom === currencyTo) {
                return 1;
            }
            else if (currencyFrom === 'USD') {
                return 0.93;
            }

            else if (currencyFrom === 'EUR') {
                return 1.08;
            }
        } else throw 'Не все переданные валюты поддерживаются';
    }

    async convert(money, currency){
        let amount = money.amount;
        let initialCurrency= money.currency;
        let changedCurrency= currency;
        let res = await this.getAvailableCurrencies();
        if(isNaN(amount)||amount==null||amount==undefined
        || !(res.includes(initialCurrency))
        || !(res.includes(changedCurrency))){
            throw "Данные переданы в неверном формате";
        } else{
            let rate = await this.getRate(initialCurrency, changedCurrency);
            amount*=rate;
            money.amount = amount;
            money.currency = changedCurrency;
            return money;
        }
    }
}


let emulator = new FinanceBackendEmulation();
emulator.getRate('USD', 'EUR').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'USD'}, 'EUR').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'EUR'}, 'USD').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'EUR'}, 'EUR').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'USD'}, 'USD').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'EUR'}, 'RUB').then((result) => { console.log(result) });
emulator.convert({amount: 10, currency: 'RUB'}, 'USD').then((result) => { console.log(result) });
