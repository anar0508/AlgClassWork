document.querySelector('button').addEventListener('click', function () {

    function CreateClient(name, r, d, e){
        return{
            snp: name,
            depRUB: r,
            depUSD: d,
            depEUR:e
        }
    }
    let client= CreateClient('Ismayilov Anar Ismayil', 500, 300, 400);
    
    console.log(client.snp);
    console.log(client.depRUB);
    console.log(client.depUSD);
    console.log(client.depEUR);

    });