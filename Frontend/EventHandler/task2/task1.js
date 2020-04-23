let changeVol = e => {
    let vol = document.querySelector('.volume-bar');
    let volume = +document.querySelector('.value').innerHTML.slice(0, -1);

    let margin = +getComputedStyle(vol).marginRight.slice(0, -2);


    if (e.target.innerHTML === "-") {
        let newMarg = margin + 21;
        if (newMarg <= 440) {
            vol.style.marginRight = `${newMarg}px`;
            volume-=5;
            document.querySelector('.value').innerHTML = `${volume}%`;
        }
    } else if (e.target.innerHTML === "+") {
        let newMarg = margin - 21;
        if (newMarg >= 20) {
            vol.style.marginRight = `${newMarg}px`;
            volume+=5;
            document.querySelector('.value').innerHTML = `${volume}%`;
        }
    }

}

let buttons = document.querySelectorAll('.button');
buttons.forEach(el => el.addEventListener('click', changeVol));

