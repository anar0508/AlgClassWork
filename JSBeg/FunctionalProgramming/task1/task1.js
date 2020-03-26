let queue = [];
class Client {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
function delPersonInQueue(queue, id) {
    let newQueue = queue.slice();
    let index;
   
    for ( let i=0; i < newQueue.length; i++) {
        if (id == newQueue[i].id) {
            index = i;
            break;
        }
    }
    newQueue.splice(index, 1);
    return newQueue;
}

function newPersonInQueue(queue, name) {
    let newQueue = queue.slice();
    let maxId = 0;
    for (let i = 0; i < newQueue.length; i++) {
        if (maxId <= newQueue[i].id) {
            maxId = (newQueue[i].id + 1);
        }
    }
    newQueue.push(new Client(name, maxId));
    return newQueue;
}

let input = '';
while (input !== null) {
    input = prompt("If you want to add new person in queue, please type-in his name. If your aim is to delete one, please input his number in queue!");
    if (input !== null && input.match(/^\d+$/)) {
        queue = delPersonInQueue(queue, input);
    } else if (input !== null) {
        queue = newPersonInQueue(queue, input);
    }
}

console.log(queue);