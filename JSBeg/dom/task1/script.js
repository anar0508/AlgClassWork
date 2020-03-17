let boyEl = document.getElementById("boy");

boyEl.addEventListener("click", boy);

function boy() {
    if (boyEl.style.backgroundColor == "red") {
        boyEl.style.backgroundColor = "green";    
    }else boyEl.style.backgroundColor = "red";
}