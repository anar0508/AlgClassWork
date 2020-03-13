document.querySelector('button').addEventListener('click', function () {
    let rem = Number (prompt("Введите остаток по счёту"));
    let lim = Number (prompt("Введите лимит"));
    alert(rem+lim);
});