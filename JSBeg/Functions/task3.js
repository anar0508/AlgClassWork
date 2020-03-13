document.querySelector('button').addEventListener('click', function () {

    let num = prompt('Введите число');
    if (natural(num) == false) {
        alert('Число не натуральное');
    } if (even(num) == true) {
        alert('Число не является нечетным');
    } else if (prime(num, 2) == true) {
        alert("Число простое");
    } else { alert("Число не простое"); }


});

function natural(num) {
    let rem = num % 1;
    let isNatural = false;
    if (num > 0 && rem == 0) {
        isNatural = true;
    }
    return isNatural;
}

function even(num) {
    let rem = num % 2;
    let isEven = false;
    if (rem == 0) {
        isEven = true;
    }
    return isEven;
}

// function prime (num){
//     let isPrime= true; 
//     for (let i=2; i<Math.sqrt(num); i++){
//         if (num%i==0){
//             isPrime=false;
//             break;
//         }
//     } 
//     return isPrime;
// }

function prime(num, d) {
    if (d==num) {
        return true;
    } else if (num % d == 0){
        return false;
    } 
    else {
       return prime(num, d+1);
    }
}