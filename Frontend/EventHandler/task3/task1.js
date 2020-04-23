sortActivities = () => {

    let sortingButton = document.querySelectorAll('.sorting');
    sortingButton.forEach(button => button.addEventListener('click', doSort))
}

changeCommas= ()=>{
    let table = document.querySelector('.equities').firstElementChild;
    let cellsWithComa = Array.from(table.children);
    cellsWithComa.shift(); 
    let cellsWithPoint = cellsWithComa.map(row=>{
        let newInner = '';
        for (let i =0; i<row.children[2].innerHTML.length; i++){
            if (row.children[2].innerHTML[i]==','){
                newInner+='.';
            } else newInner+=row.children[2].innerHTML[i];
        }
        row.children[2].innerHTML = newInner;
        return row;
    })

    cellsWithPoint.forEach(element => {
        table.appendChild(element)
    });
}

doSort = (e) => {
    changeCommas();
    let table = document.querySelector('.equities').firstElementChild;
    let headRow = table.firstElementChild;
    let headCell = e.target;
    let cell = 0;
    for (let i = 0; i < headRow.children.length; i++) {
        if (headRow.children[i].firstChild.innerHTML == headCell.innerHTML) {
            cell = i;
            break;
        }
    }
    if (e.target.classList.contains('descending')) {
        sortDescending(cell, table, headCell);
    } else sortAscending(cell, table, headCell);
}

sortAscending = (cell, table, headCell) => {
    let elArr = Array.from(table.children);
    elArr.shift();  
    let sortedElArr = elArr.sort(function (a, b) {
        if (isNaN(+a.children[cell].innerHTML)) {
            if (a.children[cell].innerHTML < b.children[cell].innerHTML) return -1;
            if (a.children[cell].innerHTML > b.children[cell].innerHTML) return 1;
            return 0;
        } else {
            return a.children[cell].innerHTML - b.children[cell].innerHTML;
        }
    });
    sortedElArr.forEach(element => {
        table.appendChild(element)
    });
    
    let sortingButton = document.querySelectorAll('.sorting');
    sortingButton.forEach(button=> button.innerHTML= button.innerHTML.slice(0, -1) + '-');
    headCell.innerHTML = headCell.innerHTML.slice(0, -1) + '^';
    headCell.classList.add('descending');
}

sortDescending = (cell, table, headCell) => {
    let elArr = Array.from(table.children);
    elArr.shift();  
    let sortedElArr = elArr.sort(function (a, b) {
        if (isNaN(+a.children[cell].innerHTML)) {
            if (a.children[cell].innerHTML > b.children[cell].innerHTML) return -1;
            if (a.children[cell].innerHTML < b.children[cell].innerHTML) return 1;
            return 0;
        } else {
            return b.children[cell].innerHTML - a.children[cell].innerHTML;
        }
    }); 
    sortedElArr.forEach(element => {
        table.appendChild(element)
    });

    let sortingButton = document.querySelectorAll('.sorting');
    sortingButton.forEach(button=> button.innerHTML= button.innerHTML.slice(0, -1) + '-');
    headCell.innerHTML = headCell.innerHTML.slice(0, -1) + '˅';
    headCell.classList.remove('descending');
}

sortActivities();
