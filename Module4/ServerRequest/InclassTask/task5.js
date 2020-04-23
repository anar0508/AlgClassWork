let newSec = 15;
let sec = 1;
let counter = document.querySelector('#counter');
let message = `До конца урока осталось: ${newSec}`;
counter.innerText = message;

function getTimer(secs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            newSec -= 1;
            let message = `До конца урока осталось: ${newSec}`;
            counter.innerText = message;
            resolve(secs);
        }, secs * 1000)
    });
}

async function showMessage() {
    let time = newSec;
    for (let i = 0; i < time; i++) {
        await getTimer(sec);
    }
}
showMessage();



