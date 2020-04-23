const deleteBanks = (() => {
    let table = document.querySelector('tbody');
    let rows = table.querySelectorAll('tr');
    rows.forEach((el) => {
        let childrens = el.children;
        if (childrens[5].className === "color-red") {
            table.removeChild(el);
        };
    })
    
})

document.getElementById("showWithRaisedIncome").addEventListener("click", deleteBanks);