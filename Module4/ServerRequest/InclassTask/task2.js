let prom = fetch('https://bolta.herokuapp.com/msg');
prom.then((result) => {return result.json()}).then((result)=>{ console.log (result)});
