document.querySelector('button').addEventListener('click', function () {

    let init = Number(prompt('Позязя, введите вашу начальную сумму'));
    let years = Number(prompt('Позязя, введите срок'));
    let interest = Number(prompt('Позязя, введите процентную ставку'));
    alert('Секундочку, сейчас вычислим!');
    let finalSum = compute(init, years, interest); 
    let message = `Через ${years} лет у вас будет ${finalSum}`;
    console.log(message);
    
    });
    
    function compute(init, years, interest){
        let finalSum = init;
        for (let i=0; i < years;  i++){
            finalSum= finalSum + (finalSum*interest)/100 ;
        }
        return finalSum;
    }
    
    