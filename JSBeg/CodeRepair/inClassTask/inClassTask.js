class SimpleCalc {
    constructor(first) {
        this.first = first;
    }
    plus(second) {
        this.first += second;
    }
    mult(second) {
        this.first *= second;
    }
    minus(second) {
        this.first -= second;
    }
    divide(second) {
        this.first /= second;
    }
    toString() {
        return this.first;
    }
}

class ProgrammerCalc {
    constructor(first) {
        this.first = first;
    }
    plus(second) {
        this.first += second;
    }
    mult(second) {
        this.first *= second;
    }
    minus(second) {
        this.first -= second;
    }
    divide(second) {
        this.first /= second;
    }
    toString() {
        let num = this.first;
        let binary = "";
        while (num >= 1) {
            binary = num % 2 + binary;
            num = Math.floor(num / 2);
        }
        return binary;
    }
}


const simpleCalc = new SimpleCalc(8);
simpleCalc.mult(10);
simpleCalc.plus(2);
simpleCalc.minus(7);
simpleCalc.divide(5);
console.log(simpleCalc.toString()); // 15

const programmerCalc = new ProgrammerCalc(8);
programmerCalc.mult(10);
programmerCalc.plus(2);
programmerCalc.minus(7);
programmerCalc.divide(5);
console.log(programmerCalc.toString()); // 1111

