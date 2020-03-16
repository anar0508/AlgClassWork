document.querySelector('button').addEventListener('click', function () {
let simpleDiv=0;
let complexDiv= 0;
let client1 = new CreateComplexClient(1, 500);
let client2 = new CreateComplexClient(2, 500);
client1.info();
client2.info();

client1.update();
client2.update();
console.log(simpleDiv);
console.log(complexDiv);
client1.update();
client2.update();
console.log(simpleDiv);
console.log(complexDiv);


let client3 = new CreateSimpleClient(3, 500);
let client4 = new CreateSimpleClient(4, 500);

client3.info();
client4.info();

client3.update();
client4.update();
console.log(simpleDiv);
console.log(complexDiv);
client3.update();
client4.update();
console.log(simpleDiv);
console.log(complexDiv);

let client5 = CreateSimpleClient(5, 500)
client5.info();

client5.update();
console.log(simpleDiv);
console.log(complexDiv);
client5.update();
console.log(simpleDiv);
console.log(complexDiv);

function CreateSimpleClient(number, dep) {
    return {
        id: number,
        deposit: +dep,
        initDeposit: +dep,
        interest: 18,
        
        update: function () {
            this.deposit += (this.initDeposit * (this.interest / 100));
            simpleDiv+= this.initDeposit * (this.interest / 100);
        },
        info: function () {
            console.log(
                `id=${this.id}
        deposit=${this.deposit}
        initial deposit=${this.initDeposit}`);
        }
    }
}

function CreateComplexClient(number, dep) {
    return {
        id: number,
        deposit: +dep,
        interest: 18,
        update: function () {
            complexDiv+=((this.deposit * (this.interest / 100)));
            this.deposit *= (1 + this.interest / 100);

        },
        info: function () {
            console.log(
                `id=${this.id}
        deposit=${this.deposit}`)
        }
    }
}
})