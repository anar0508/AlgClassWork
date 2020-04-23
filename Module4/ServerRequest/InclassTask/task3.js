let newSec = 15;
let sec = 5;
let counter = document.querySelector('#counter');

function getTimer(secs) {
    return new Promise((resolve) => {
        if (!isNaN(secs)) {
            let message = `До конца урока осталось: ${newSec}`;
            counter.innerText = message;
            setTimeout(() => {
                resolve(secs);
            }, secs * 1000)
        }
    });
}
const truePromise = getTimer(sec);

truePromise.then(() => {
    let message = `До конца урока осталось: ${newSec}`;
    counter.innerText = message;
    newSec -= 5;
    return getTimer(sec);
}).then(() => {
    let message = `До конца урока осталось: ${newSec}`;
    counter.innerText = message;
    newSec -= 5;
    return getTimer(sec);
}).then(() => {
    let message = `Конец`;
    counter.innerText = message;
});


