document.querySelector('button').addEventListener('click', function () {
    let client = new CreateComplexClient(45654, 500);
    client.info();

    let client1 = new CreateSimpleClient(29596, 500);
    client1.info();

    client.update();
    client.info();
    client1.update();
    client1.info();

    client.update();
    client.info();
    client1.update();
    client1.info();

    function CreateSimpleClient(number, dep) {
        return {
            id: number,
            deposit: dep,
            initDeposit: dep,
            interest: 18,
            update: function () {
                this.deposit += (this.initDeposit * (this.interest / 100));
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
            deposit: dep,
            interest: 18,
            update: function () {
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