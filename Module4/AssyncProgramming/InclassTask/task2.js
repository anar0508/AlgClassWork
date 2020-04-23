let counter = document.querySelector('#counter');
let sec = 5;
function getTimer(secs) {
    return new Promise((resolve, reject) => {
        if (!isNaN(secs)) {
            resolve();
        }
        else { reject(); }
    });
}

const truePromise = getTimer(sec);
const falsePromise = getTimer('fdsf');

truePromise.then(() => {
    setTimeout(() => {
        let message = `От начала урока прошло: ${sec}`;
        counter.innerText = message;

    }, sec * 1000);
}, () => console.log('Something is wrong'));

falsePromise.then(() => {
    setTimeout((sec) => {
        let message = `От начала урока прошло: ${sec}`;
        counter.innerText = message;

    },
        sec * 1000);
}, () => console.log('Something is wrong'));

console.log(truePromise);
console.log(falsePromise);