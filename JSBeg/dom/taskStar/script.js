let sum = +document.getElementById("sum");
let term = +document.getElementById("term");
let per = 12;
let totalSum = sum + sum * 12 / 100;
let remMain = sum;
let remPercent = sum * 12 / 100;
let table = document.getElementById("myTable");
document.getElementsByClassName("button").addEventListener("click", showTable);

function showTable() {
    for (let i = 1; i <= term; i++) {

        let row = table.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
        cell7 = row.insertCell(6);

        cell1.innerHTML = i;
        cell2.innerHTML = totalSum / term;
        cell3.innerHTML = sum / term;
        cell4.innerHTML = (totalSum - sum) / term;
        if (remPercent > 0 && Math.abs(remPercent + (remPercent -= totalSum / term)) < totalSum / term) {
            cell5.innerHTML = remMain + (remPercent - totalSum / term);
            remMain += (remPercent - totalSum / term);
            cell6.innerHTML = remPercent - remPercent;
            remPercent == 0;
            cell7.innerHTML = remMain + remPercent;
        } else if (remPercent - totalSum / term >= 0) {
            cell5.innerHTML = remMain;
            cell6.innerHTML = remPercent - totalSum / term;
            remPercent -= totalSum / term;
            cell7.innerHTML = remMain + remPercent;
        } else {
            cell5.innerHTML = remMain - totalSum / term;
            remMain -= totalSum / term;
            cell6.innerHTML = 0;
            cell7.innerHTML = remMain + remPercent;
        }


    }
}