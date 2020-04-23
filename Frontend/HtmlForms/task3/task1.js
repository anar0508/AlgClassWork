


let shareAdder = document.forms.shareAdder;
shareAdder.addEventListener('submit', (e) => {
    e.preventDefault();
    let table = document.querySelector(".equities");
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = shareAdder.countrySelector.value;
    row.insertCell(1).innerHTML = shareAdder.shareName.value;
    row.insertCell(2).innerHTML = shareAdder.priceInput.value;
    row.insertCell(3).innerHTML = shareAdder.priceChangeInput.value + '%';

    if (shareAdder.priceChangeInput.value < 0) {
        row.lastElementChild.classList.add('decrease');
    } else if (shareAdder.priceChangeInput.value > 0) {
        row.lastElementChild.classList.add('increase');
    }

    shareAdder.reset();
});

shareAdder.addEventListener('reset', (e) => {
    shareAdder.reset();
});
