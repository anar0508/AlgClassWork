let but = document.getElementById("but");
let sum = Number(document.getElementById("in").value);
but.addEventListener("click", boy);


function boy() {
    let sum = Number(document.getElementById("in").value);
    if (sum < 100 || isNaN(sum)) {
        alert("Введёное значение должно быть больше 100");
    } else {
        but.style.display = "none";
        document.getElementById("main-indicator-success").style.display = "inline";
    }

}