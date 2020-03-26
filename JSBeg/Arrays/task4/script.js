class Transaction{
    constructor(from, to, sum){
        this.fromClient =from;
        this.toClient = to; 
        this.amount = sum;
        this.comission; 
    }
        calculateComission(){
            this.comission = this.amount*5/100;
        }
}


const transaction = new Transaction('Christian', 'Daniel', 1000);
console.log(transaction.calculateComission()); // 50