const handleClick = (e) => {
    if (e.target.innerHTML === "Скрыть подробости") {
        if (e.target.nextElementSibling != null) {
            e.target.nextElementSibling.style.display = "none";
            e.target.innerHTML = "Показать подробности";
            e.target.parentElement.lastElementChild.innerHTML = "Показать подробности";
        }
        else {
            e.target.innerHTML = "Показать подробности";
            e.target.previousElementSibling.style.display = "none";
            e.target.previousElementSibling.previousElementSibling.innerHTML = "Показать подробности";
        }
    }
    else {
        if (e.target.nextElementSibling != null) {
            e.target.nextElementSibling.style.display = "block";
            e.target.innerHTML = "Скрыть подробости";
            e.target.parentElement.lastElementChild.innerHTML = "Скрыть подробости";
        }
        else {
            e.target.previousElementSibling.style.display = "block";
            e.target.innerHTML = "Скрыть подробости";
            e.target.previousElementSibling.previousElementSibling.innerHTML = "Скрыть подробости";
            
        }

    }
}

let moreInfo = document.querySelectorAll('.more-info-button');
for (let i = 0; i < moreInfo.length; i++) {
    moreInfo[i].addEventListener('click', handleClick);
}