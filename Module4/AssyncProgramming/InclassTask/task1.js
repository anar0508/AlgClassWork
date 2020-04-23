let counter=document.querySelector('#counter');
let sec=-1;
setInterval(()=>
{   
    sec++;
    let message = `От начала урока прошло: ${sec}`;
    counter.innerText = message;
 },
1000);