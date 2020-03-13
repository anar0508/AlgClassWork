document.querySelector('button').addEventListener('click', function () {

    let init = Number(prompt('Позязя, введите вашу начальную сумму'));
    let desired = Number(prompt('Позязя, введите вашу желаемую сумму'));
    let interest = Number(prompt('Позязя, введите процентную ставку'));
    alert('Секундочку, сейчас вычислим!');
    
    let years = compute(init, desired, interest); 
    let message = `Вы накопите желаемую сумму за ${years} лет`;
    console.log(message);
    
    });
    
    function compute(init, desired, interest){
        let current = init; 
        let years = 0;
        while(current<=desired){
           current= current+(current*interest)/100;
            years++;

        }
        return years;
    }
    
    