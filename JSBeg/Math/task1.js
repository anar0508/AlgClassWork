document.querySelector('button').addEventListener('click', function () {
    function calculateSum(monthes, initBal){
        let years = Math.floor(monthes/12);
        let bal= initBal;
        for (let i=1; i<=years;i++){
            bal+= bal*12/100 
        }
        return bal;
    }
    
    console.log(calculateSum(37, 100));
    })