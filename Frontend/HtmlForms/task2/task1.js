
function setCurrencies() {
    return {
        AZN: 1,
        RUB: 0.022,
        USD: 1.70,
        EUR: 1.84
    }
}

let converter = document.forms.converter;
converter.addEventListener('submit', (e) => {
    e.preventDefault();
    let resParent = document.getElementById('result');
    if (resParent.innerHTML !== '') {
        resParent.innerHTML = '';
    }
    let currencies = new setCurrencies;

    const userCur = e.target.currency.value;
    const sum = e.target.inputSum.value;
    const result = sum * currencies[userCur];
    let resMessage = `Сумма в введённой валюте составит ${result}`;
    resParent.innerHTML = resMessage;
    converter.reset();
}
);
