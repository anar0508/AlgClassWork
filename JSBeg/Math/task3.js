document.querySelector('button').addEventListener('click', function () {
    function calculateSum(monthes, initBal) {
        let years = Math.floor(monthes / 12);
        let remMonthes = monthes%12;
        let bal = initBal;
    
        bal = Math.floor(bal * Math.pow((1 + 12 / 100), years));
        let remMonthesBal = bal * (1 + 7/100); 
        if (remMonthes!=0){
            return remMonthesBal; 
        }return bal;
        
    }
    console.log(calculateSum(24, 100));
    console.log(calculateSum(25, 100));
    
    })