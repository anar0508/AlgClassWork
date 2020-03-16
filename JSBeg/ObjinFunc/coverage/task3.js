document.querySelector('button').addEventListener('click', function () {
    let client = new CreateClient('Anar Ismayilov', 5000);
    console.log(client);

    let client1 = new CreateClient('Javid Bunyatzade', 50);
    console.log(client1);

    client.getAvailableFunds();
    client.withdraw(200);
    client.update(3000);
    client.withdraw(10000);
    console.log(client.lastPayment);




    function CreateClient(name, credLim) {
        return {
            "Full Name": name,
            credLimit: credLim,
            currentBalance: 0,
            lastPayment: 0,
            minPayPer: 8,
            getAvailableFunds: function () {
                console.log('Текущий баланс = ' + this.currentBalance + '\nКредитный лимит = ' + this.credLimit +
                    '\nСумма доступных средств = ' + (this.currentBalance + this.credLimit))
            },
            getMinPayment: function () {
                if (currentBalance < 0) {
                    console.log('Сумма минимального платежа = ' + (this.minPayPer * Math.abs(this.currentBalance) / 100));
                } else {
                    console.log('У вас нет долга');
                }
            },
            withdraw: function (withdrawedSum) {
                if (Math.abs(this.currentBalance - (+withdrawedSum)) <= credLim) {
                    this.currentBalance -= (+withdrawedSum);
                    console.log('Деньги списались. Текущий баланс = ' + this.currentBalance);
                } else {
                    console.log('У вас недостаточно средств, чувааак!');
                }
            },

            update: function (paymentSum) {
                this.currentBalance += (+paymentSum);
                console.log('Оплата принята. Текущий баланс = ' + this.currentBalance);
                this.lastPayment = (+paymentSum);
            }
        }
    }

});